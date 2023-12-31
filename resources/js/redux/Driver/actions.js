import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd"
import { displayErrors, fileFormconfig } from "../../config/helpers"

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

        dispatch({
            type: GET_DRIVER,
            payload: {}
        });
        message.success('Fetch Drivers!')
    }).catch(error => {
        message.error("Couldn't get Drivers!")
    });
}

export const createDriver = (data, navigate) => (dispatch) => {
    const res = postRequest('admin/driver/create', data).then(response => {
        dispatch({
            type: CREATE_DRIVER,
            payload: response.data
        });
        message.success('Create Driver Successfully!')
        navigate('/admin/drivers')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const updateWorkForm = (data, navigate) => (dispatch) => {
    const res = postRequest('admin/driver/workForm', data).then(response => {
        message.success('Driver Successfully!')
        navigate('/admin/drivers')
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

export const updateDriver = (data, navigate) => (dispatch) => {
    const res = postRequest('admin/driver/update', data).then(response => {
        dispatch({
            type: UPDATE_DRIVER,
            payload: response.data
        });
        message.success('Update Driver Done!')
        navigate('/admin/drivers')
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


export const deleteDriverZone=(deliveryWindowAndZoneId) => {
    const res = deleteRequest(`admin/driver/deliveryWindowAndZone/${deliveryWindowAndZoneId}`).then(response => {
        message.success('Driver Zone Deleted!')
    });
}


export const addMedia = (data) => (dispatch) => {
    const res = postRequest('admin/driver/addMedia', data, fileFormconfig).then(response => {
        dispatch({
            type: GET_DRIVER,
            payload: response.data
        });
        message.success('Media Added Done!')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const removeMedia = (data) => (dispatch) => {
    const res = postRequest('admin/driver/removeMedia', data).then(response => {
        dispatch({
            type: GET_DRIVER,
            payload: response.data
        });
        message.success('Media Removed Done!')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}