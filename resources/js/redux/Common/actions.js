import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"

export const SET_ERRORS = "SET_ERRORS"
export const REDIRECT_TO = "REDIRECT_TO";

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

    const res = postRequest('order/status/update', data).then(response => {
        dispatch({
            type: ORDER_PLACED,
            payload: response.data
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