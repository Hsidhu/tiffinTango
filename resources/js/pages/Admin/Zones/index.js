/* global google */
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from "../../../config/constants";

// https://github.com/google-map-react/google-map-react/issues/1034

const Zone = () => {
    const handleApiLoaded = (map, maps) => {
        const drawingManager = new maps.drawing.DrawingManager({
            drawingMode: maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
                position: maps.ControlPosition.TOP_CENTER,
                drawingModes: [
                    maps.drawing.OverlayType.MARKER,
                    maps.drawing.OverlayType.POLYGON,
                    maps.drawing.OverlayType.CIRCLE
                ],
            },
            markerOptions: {
                icon:
                    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            },
            circleOptions: {
                fillColor: "#ffff00",
                fillOpacity: 1,
                strokeWeight: 5,
                clickable: false,
                editable: true,
                zIndex: 1,
            },
        });
        drawingManager.setMap(map);
        maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
            let area = null
            const polygonPaths = polygon.getPath()
            area = maps.geometry.spherical.computeArea(polygonPaths)
            console.log({ area, polygon })

            // adding events to each polygon vertex
            polygon.getPaths().forEach(path => {
                maps.event.addListener(path, 'insert_at', () => {
                    // New point
                    area = maps.geometry.spherical.computeArea(polygonPaths)
                    console.log('new point added', { area })
                })

                maps.event.addListener(path, 'remove_at', () => {
                    // Point was removed
                    area = maps.geometry.spherical.computeArea(polygonPaths)
                    console.log('a point was removed', { area })
                })

                maps.event.addListener(path, 'set_at', () => {
                    // Point was moved
                    area = maps.geometry.spherical.computeArea(polygonPaths)
                    console.log('some point was relocated', { area })
                })
            })
        })
    }
    return (
        <GoogleMapReact
            bootstrapURLKeys={{ libraries: 'drawing', key: GOOGLE_API_KEY }}
            defaultCenter={{ lat: 40.7549394, lng: -73.9772689 }}
            defaultZoom={10}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => {
                //this.renderMarker(map, maps)
                handleApiLoaded(map, maps)
            }}
        >
        </GoogleMapReact>
    );
};

export default Zone;