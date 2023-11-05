import React from 'react';
import GoogleMapReact from 'google-map-react';

import { GOOGLE_API_KEY } from "../../../config/constants";
import { isEmpty } from 'lodash';

const MapViewOfRoute = ({ directionResponse }) => {

    if (isEmpty(directionResponse)) {
        return null;
    }

    const handleApiLoaded = (map, maps) => {

        const directionsRenderer = new maps.DirectionsRenderer({
            preserveViewport: true, // Adjust based on your requirements
            suppressMarkers: false, // Adjust based on your requirements
        });
        directionsRenderer.setMap(map);

        directionResponse.request = {travelMode: maps.DirectionsTravelMode.DRIVING};
        directionsRenderer.setDirections(directionResponse);   
    }

    return (
        <>
            <GoogleMapReact
                style={{ height: '500px' }}
                bootstrapURLKeys={{ libraries: ['drawing', 'geometry', 'places'], key: GOOGLE_API_KEY }}
                defaultCenter={{ lat: 43.7829505, lng: -79.7494863 }}
                defaultZoom={12}
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({ map, maps }) => {
                    handleApiLoaded(map, maps)
                }}
            >
            </GoogleMapReact>
        </>


    );
};

export default MapViewOfRoute;
