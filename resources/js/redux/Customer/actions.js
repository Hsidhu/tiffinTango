import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd"

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

    const res = postRequest('customer/create', data).then(response => {
        console.log(response.data)
        dispatch({
            type: GET_CUSTOMERS,
            payload: response.data
        });
    }).catch(error => {
        message.error('something wrong')
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
    const res = postRequest('customer/update', data).then(response => {
        // dispatch({
        //     type: GET_CUSTOMERS,
        //     payload: response.data
        // });
    }).catch(error => {
        message.error('something wrong')
    });
}

export const deleteCustomer = (id) => (dispatch) => {

    const res = deleteRequest(`customer/delete/${id}`).then(response => {
        // dispatch({
        //     type: GET_CUSTOMERS,
        //     payload: response.data
        // });
    }).catch(error => {
        message.error('something wrong')
    });
}

