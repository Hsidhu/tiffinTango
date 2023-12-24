import { axiosConfig } from "./constants";

export const fileFormconfig = {
    headers: {
        'content-type': 'multipart/form-data',
    },
};

export const getBase64FileReader = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});

export const imageUrl = (uri) => {
    return `${axiosConfig.HOST_URL}/${uri}`
}
export const mapSwitchValue = (value) => (value ? 1 : 0);

/**
 * Modify Geo route request
 */
const addGoogleServiceSDKFields = (serverResponse, maps) => {
    serverResponse.routes = serverResponse.routes.map((response) => {
        const bounds = new maps.LatLngBounds(
            response.bounds.southwest,
            response.bounds.northeast,
        );
        response.bounds = bounds;
        response.overview_path =
            maps.geometry.encoding.decodePath(response.overview_polyline.points);

        response.legs = response.legs.map((leg) => {
            leg.start_location =
                new maps.LatLng(leg.start_location.lat, leg.start_location.lng);
            leg.end_location =
                new maps.LatLng(leg.end_location.lat, leg.end_location.lng);
            leg.steps = leg.steps.map((step) => {
                step.path = maps.geometry.encoding.decodePath(step.polyline.points);
                step.start_location = new maps.LatLng(
                    step.start_location.lat,
                    step.start_location.lng,
                );
                step.end_location = new maps.LatLng(
                    step.end_location.lat,
                    step.end_location.lng,
                );
                return step;
            });
            
            return leg;
        });
        return response;
    });
    serverResponse.request = {travelMode: maps.DirectionsTravelMode.DRIVING};
    return serverResponse;
}

export function getUrlSegment(urlString, index) {
    const url = new URL(urlString);
    const segments = url.pathname.split('/');
    return segments[index];
}



export const displayErrors = (response) => {
    const errorMessages = Object.entries(response.errors).map(([field, errors]) => (
      <ul key={field}>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    ));
    return errorMessages
};