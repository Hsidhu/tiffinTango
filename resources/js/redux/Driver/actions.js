import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd"
import { displayErrors } from "../../config/helpers"

export const GET_DRIVERS = "GET_DRIVERS"
export const CREATE_DRIVER = "CREATE_DRIVER"
export const GET_DRIVER = "GET_DRIVER"
export const UPDATE_DRIVER = "UPDATE_DRIVER"
export const DELETE_DRIVER = "DELETE_DRIVER"
export const GET_DRIVER_SELECT = "GET_DRIVER_SELECT"

export const getDrivers = () => (dispatch) => {
    const res = getRequest('admin/drivers').then(response => {
        dispatch({
            type: GET_DRIVERS,
            payload: response.data
        });
        message.success('Fetch Drivers!')
    }).catch(error => {
        message.error("Couldn't get Drivers!")
    });
}

export const createDriver = (data, history) => (dispatch) => {
    const res = postRequest('admin/driver/create', data).then(response => {
        dispatch({
            type: CREATE_DRIVER,
            payload: response.data
        });
        message.success('Create Driver Successfully!')
        history.push('/admin/drivers')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const getDriver = (id) => (dispatch) => {
    const res = getRequest(`admin/driver/edit/${id}`).then(response => {
        dispatch({
            type: GET_DRIVER,
            payload: response.data
        });
    });
}

export const updateDriver = (data, history) => (dispatch) => {
    const res = postRequest('admin/driver/update', data).then(response => {
        dispatch({
            type: UPDATE_DRIVER,
            payload: response.data
        });
        message.success('Update Driver Done!')
        history.push('/admin/drivers')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const deleteDriver = (id) => (dispatch) => {

    const res = deleteRequest(`admin/driver/delete/${id}`).then(response => {
        dispatch({
            type: DELETE_DRIVER,
            payload: response.data
        });
        message.success('Driver Deleted!')
    }).catch(error => {
        message.error('Driver Delete: Something went wrong!')
    });
}


export const getDriverSelect = () => (dispatch) => {
    const res = getRequest(`admin/driver/select`).then(response => {
        dispatch({
            type: GET_DRIVER_SELECT,
            payload: response.data
        });
    });
}
