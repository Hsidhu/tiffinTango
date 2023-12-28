import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd"
import { displayErrors } from "../../config/helpers"

export const GET_CUSTOMERS = "GET_CUSTOMERS"
export const GET_CUSTOMER = "GET_CUSTOMER"
export const GET_NEW_CUSTOMER = "GET_NEW_CUSTOMER"
export const GET_UPDATE_CUSTOMER = "GET_UPDATE_CUSTOMER"
export const GET_DELETE_CUSTOMER = "GET_DELETE_CUSTOMER"

export const getCustomers = () => (dispatch) => {
    const res = getRequest('admin/customers').then(response => {
        dispatch({
            type: GET_CUSTOMERS,
            payload: response.data
        });
        dispatch({
            type: GET_CUSTOMER,
            payload: {}
        });
    });
}

export const createCustomers = (data, history) => (dispatch) => {

    const res = postRequest('admin/customer/create', data).then(response => {
        dispatch({
            type: GET_CUSTOMERS,
            payload: response.data
        });
        message.success('Customer Created')
        history.push('/admin/customers')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const getCustomer = (id) => (dispatch) => {
    const res = getRequest(`admin/customer/edit/${id}`).then(response => {
        dispatch({
            type: GET_CUSTOMER,
            payload: response.data
        });
    });
}

export const updateCustomer = (data, history) => (dispatch) => {
    const res = postRequest('admin/customer/update', data).then(response => {
        // dispatch({
        //     type: GET_CUSTOMERS,
        //     payload: response.data
        // });
        
        message.success('update Customer Done!')
        history.push('/admin/customers')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}


export const createCustomerOrder = (data, history) => (dispatch) => {
    const res = postRequest('admin/customer/createOrder', data).then(response => {
        message.success('Customer order created!')
        history.push('/admin/orders')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const deleteCustomer = (id) => (dispatch) => {

    const res = deleteRequest(`admin/customer/delete/${id}`).then(response => {
        // dispatch({
        //     type: GET_CUSTOMERS,
        //     payload: response.data
        // });
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

