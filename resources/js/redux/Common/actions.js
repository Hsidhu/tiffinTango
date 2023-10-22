import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd"

export const SET_ERRORS = "SET_ERRORS"
export const REDIRECT_TO = "REDIRECT_TO";

export const COOKIE_CONSENT = "COOKIE_CONSENT";

export const ORDER_STATUSES = "ORDER_STATUSES";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";
export const DELIVERY_WINDOWS = "DELIVERY_WINDOWS";

// action creators
export const redirect = link => {
    return { type: REDIRECT_TO, payload: link };
};

export const getOrderStatuses = () => (dispatch) => {
    const res = getRequest('order/statuses').then(response => {
        dispatch({
            type: ORDER_STATUSES,
            payload: response.data
        });
    });
}

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

export const getDeliveryWindows = () => (dispatch) => {
    const res = getRequest('delivery_windows').then(response => {
        dispatch({
            type: DELIVERY_WINDOWS,
            payload: response.data
        });
    });
}


export const setcookieConsent = () => {
    dispatch({
        type: DELIVERY_WINDOWS,
        payload: data
    });
}