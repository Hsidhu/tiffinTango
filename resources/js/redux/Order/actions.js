import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from 'antd';

export const GET_ORDERS = "GET_ORDERS"
export const GET_ORDER = "GET_ORDER";
export const DAILY_DELIVERIES = "DAILY_DELIVERIES";
export const DAILY_DELIVERY_STICKERS = "DAILY_DELIVERY_STICKERS"

export const getOrders = () => (dispatch) => {
    const res = getRequest('admin/orders').then(response => {
        dispatch({
            type: GET_ORDERS,
            payload: response.data
        });
        dispatch({
            type: GET_ORDER,
            payload: {}
        });
    });
}

export const getOrder = (id) => (dispatch) => {
    const res = getRequest(`admin/order/view/${id}`).then(response => {
        dispatch({
            type: GET_ORDER,
            payload: response.data
        });
    }).catch(error => {
        message.success('Order Not Found!');
    });
}

export const cloneOrder = (id, navigate) => (dispatch) => {
    const res = getRequest(`admin/order/cloneOrder/${id}`).then(response => {
        message.success('New Order Created!');
        navigate(`/admin/order/view/${response.data.id}`)
    });
}

// any key pair can be updated
export const updateOrderStatus = (data) => (dispatch) => {

    const res = postRequest('admin/order/updates', data).then(response => {
        dispatch({
            type: GET_ORDER,
            payload: response.data
        });
        message.success({
            content: 'Order Updated',
            style: {
                padding:'20px',
                marginTop: '5vh',
            }
        });
    }).catch(error => {
        console.log(error);
    });
}


// any key pair can be updated
export const addPickupLog = (data) => (dispatch) => {

    const res = postRequest('admin/order/picked', data).then(response => {
        // dispatch({
        //     type: ORDER_PLACED,
        //     payload: response.data
        // });
        message.success({
            content: 'Order Updated',
            style: {
                padding:'20px',
                marginTop: '5vh',
            }
        });
    }).catch(error => {
        console.log(error);
    });
}


export const getDailyDeliveries = () => (dispatch) => {

    const res = getRequest('admin/order/dailyDeliveries').then(response => {
        dispatch({
            type: DAILY_DELIVERIES,
            payload: response.data
        });
    }).catch(error => {
        console.log(error);
    });
}

export const getStickerData = (data) => (dispatch) => {

    const res = postRequest('admin/order/getStickerData', data).then(response => {
        dispatch({
            type: DAILY_DELIVERY_STICKERS,
            payload: response.data
        });
    }).catch(error => {
        console.log(error);
    });
}

// any key pair can be updated
export const createDailyDeliveries = (data) => (dispatch) => {

    const res = postRequest('admin/order/generateDailyDeliveries', data).then(response => {
        dispatch({
            type: DAILY_DELIVERIES,
            payload: response.data
        });
        message.success({
            content: 'Daily Deliveries',
            style: {
                padding:'20px',
                marginTop: '5vh',
            }
        });
    }).catch(error => {
        console.log(error);
    });
}

export const updatedOrderOfDailyDelivery = (data) => (dispatch) => {

    const res = postRequest('admin/order/generateDailyDelivery/update', data).then(response => {
        
        message.success({
            content: 'Daily Deliveries Order updated',
            style: {
                padding:'20px',
                marginTop: '5vh',
            }
        });
    }).catch(error => {
        console.log(error);
        message.error({
            content: 'Something Went wrong!',
            style: {
                padding:'20px',
                marginTop: '5vh',
            }
        });
    });
}


// Customer api get order

export const getCustomerOrders = () => (dispatch) => {
    const res = getRequest('customer/orders').then(response => {
        dispatch({
            type: GET_ORDERS,
            payload: response.data
        });
    });
}

export const getCustomerOrder = (id) => (dispatch) => {
    const res = getRequest(`customer/order/view/${id}`).then(response => {
        dispatch({
            type: GET_ORDER,
            payload: response.data
        });
    });
}
