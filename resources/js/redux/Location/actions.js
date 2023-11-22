import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd";
import { displayErrors } from "../../config/helpers"

export const GET_LOCATIONS = "GET_LOCATIONS"
export const GET_LOCATION = "GET_LOCATION"
export const GET_NEW_LOCATION = "GET_NEW_LOCATION"
export const GET_UPDATE_LOCATION = "GET_UPDATE_LOCATION"
export const GET_DELETE_LOCATION = "GET_DELETE_LOCATION"

export const getLocations = () => (dispatch) => {
    const res = getRequest('admin/locations').then(response => {
        dispatch({
            type: GET_LOCATIONS,
            payload: response.data
        });
    });
}

export const createLocation = (data) => (dispatch) => {

    const res = postRequest('admin/location/create', data).then(response => {
        console.log(response.data)
        dispatch({
            type: GET_LOCATIONS,
            payload: response.data
        });
        message.success('Location Created!');
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const getLocation = (id) => (dispatch) => {
    const res = getRequest(`admin/location/edit/${id}`).then(response => {
        dispatch({
            type: GET_LOCATION,
            payload: response.data
        });
    });
}

export const updateLocation = (data) => (dispatch) => {
    const res = postRequest('location/update', data).then(response => {
        // dispatch({
        //     type: GET_LOCATION,
        //     payload: response.data
        // });

        message.success('Location Update!');
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const deleteLocation = (id) => (dispatch) => {

    const res = deleteRequest(`location/delete/${id}`).then(response => {
        // dispatch({
        //     type: GET_LOCATION,
        //     payload: response.data
        // });

        message.success('Location Deleted!');
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

