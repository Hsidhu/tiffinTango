import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import Errors from "../../services/errors"

import { SET_ERRORS } from "../Common/actions"

export const GET_CUSTOMERS = "GET_CUSTOMERS"
export const GET_CUSTOMER = "GET_CUSTOMER"
export const GET_NEW_CUSTOMER = "GET_NEW_CUSTOMER"
export const GET_UPDATE_CUSTOMER = "GET_UPDATE_CUSTOMER"
export const GET_DELETE_CUSTOMER = "GET_DELETE_CUSTOMER"


export const getCustomers = () => (dispatch) => {
    const res = getRequest('customer').then(response => {
        console.log(response.data)
        dispatch({
            type: GET_CUSTOMERS,
            payload: response.data
        });
    });
}

export const createCustomers = (data) => (dispatch) => {
    let errs= Errors;
    const res = postRequest('customer/create', data).then(response => {
        console.log(response.data)
        dispatch({
            type: GET_CUSTOMERS,
            payload: response.data
        });
    }).catch(error => {
        errs.setErrors(error.response)
        dispatch({
            type: SET_ERRORS,
            payload: errs
        });
    });
}

export const getCustomer = (id) => (dispatch) => {
    const res = getRequest(`customer/edit/${id}`).then(response => {
        dispatch({
            type: GET_CUSTOMER,
            payload: response.data
        });
    });
}

export const updateCustomer = (data) => (dispatch) => {
    let errs = Errors;
    const res = postRequest('customer/update', data).then(response => {
        // dispatch({
        //     type: GET_CUSTOMERS,
        //     payload: response.data
        // });
    }).catch(error => {
        errs.setErrors(error.response)
        dispatch({
            type: SET_ERRORS,
            payload: errs
        });
    });
}

export const deleteCustomer = (id) => (dispatch) => {
    let errs= Errors;
    const res = deleteRequest(`customer/delete/${id}`).then(response => {
        // dispatch({
        //     type: GET_CUSTOMERS,
        //     payload: response.data
        // });
    }).catch(error => {
        errs.setErrors(error.response)
        dispatch({
            type: SET_ERRORS,
            payload: errs
        });
    });
}

