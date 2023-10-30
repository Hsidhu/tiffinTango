import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"

export const GET_ORDERS = "GET_ORDERS"
export const GET_ORDER = "GET_ORDER";
export const DAILY_DELIVERIES = "DAILY_DELIVERIES";
export const DAILY_DELIVERY_STICKERS = "DAILY_DELIVERY_STICKERS"

export const getOrders = () => (dispatch) => {
    const res = getRequest('orders').then(response => {
        dispatch({
            type: GET_ORDERS,
            payload: response.data
        });
    });
}

export const getOrder = (id) => (dispatch) => {
    const res = getRequest(`order/view/${id}`).then(response => {
        dispatch({
            type: GET_ORDER,
            payload: response.data
        });
    });
}


// any key pair can be updated
export const updateOrderStatus = (data) => (dispatch) => {

    const res = postRequest('order/updates', data).then(response => {
        dispatch({
            type: ORDER_PLACED,
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

    const res = postRequest('order/picked', data).then(response => {
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

    const res = getRequest('order/dailyDeliveries').then(response => {
        dispatch({
            type: DAILY_DELIVERIES,
            payload: response.data
        });
    }).catch(error => {
        console.log(error);
    });
}

export const getStickerData = (data) => (dispatch) => {

    const res = postRequest('order/getStickerData', data).then(response => {
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

    const res = postRequest('order/generateDailyDeliveries', data).then(response => {
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