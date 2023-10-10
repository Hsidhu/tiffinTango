export const axiosConfig = {
    //HOST_URL: 'https://laravel-react-boilerplate.herokuapp.com/api',
    HOST_URL: 'https://tiffintango.dvl.to/api',
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

export const deliveryWindow = [
    { label: 'Morning', value: 'morning' },
    { label: 'Evening', value: 'evening' }
];

