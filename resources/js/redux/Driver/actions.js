import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd"

export const GET_DRIVERS = "GET_DRIVERS"
export const CREATE_DRIVER = "CREATE_DRIVER"
export const GET_DRIVER = "GET_DRIVER"
export const UPDATE_DRIVER = "UPDATE_DRIVER"
export const DELETE_DRIVER = "DELETE_DRIVER"

export const getDrivers = () => (dispatch) => {
    const res = getRequest('drivers').then(response => {
        dispatch({
            type: GET_DRIVERS,
            payload: response.data
        });
    }).catch(error => {
        message.error("Couldn't get Drivers!")
    });
}

export const createDriver = (data) => (dispatch) => {
    const res = postRequest('driver/create', data).then(response => {
        dispatch({
            type: CREATE_DRIVER,
            payload: response.data
        });
    }).catch(error => {
        message.error('Create Driver: Something went wrong!')
    });
}

export const getDriver = (id) => (dispatch) => {
    const res = getRequest(`driver/edit/${id}`).then(response => {
        dispatch({
            type: GET_DRIVER,
            payload: response.data
        });
    });
}

export const updateDriver = (data) => (dispatch) => {
    const res = postRequest('driver/update', data).then(response => {
        dispatch({
            type: UPDATE_DRIVER,
            payload: response.data
        });
    }).catch(error => {
        message.error('Driver update: something went wrong!')
    });
}

export const deleteCustomer = (id) => (dispatch) => {

    const res = deleteRequest(`driver/delete/${id}`).then(response => {
        dispatch({
            type: DELETE_DRIVER,
            payload: response.data
        });
    }).catch(error => {
        message.error('Driver Delete: Something went wrong!')
    });
}

