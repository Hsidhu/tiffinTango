import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd"

export const SET_ERRORS = "SET_ERRORS"
export const REDIRECT_TO = "REDIRECT_TO";
export const GET_SITE_SETTINGS = "GET_SITE_SETTINGS";

export const COOKIE_CONSENT = "COOKIE_CONSENT";

export const ORDER_STATUSES = "ORDER_STATUSES";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";
export const DELIVERY_WINDOWS = "DELIVERY_WINDOWS";


export const getSiteSettings = () => (dispatch) => {
    const res = getRequest('site/settings').then(response => {
        dispatch({
            type: GET_SITE_SETTINGS,
            payload: response.data
        });
    });
}



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