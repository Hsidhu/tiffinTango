export const axiosConfig = {
    //HOST_URL: 'https://laravel-react-boilerplate.herokuapp.com/api',
    HOST_URL: process.env.API_URL ?? 'https://tiffintango.dvl.to/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;


export const orderTypeOptions = [
    { label: 'Delivery', value: 'delivery' },
    { label: 'Pickup', value: 'pickup' }
];


export const autocompleteOptions = {
    // bounds: {
    //     // Define the bounds here
    //     north: 40.7128, // North latitude
    //     south: 34.0522, // South latitude
    //     east: -74.0060, // East longitude
    //     west: -118.2437, // West longitude
    // },
    componentRestrictions: { 
        country: ["ca"]
    },
    fields: ["address_components", "geometry"],
    types: ["address"]
}


export const USER_TYPE_USER = 'user'
export const USER_TYPE_DRIVER = 'driver'
export const USER_TYPE_CUSTOMER = 'customer'