import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd"

export const GET_DELIVERY_ZONES = "GET_DELIVERY_ZONES"
export const CREATE_DELIVERY_ZONE = "CREATE_DELIVERY_ZONE"
export const GET_DELIVERY_ZONE = "GET_DELIVERY_ZONE"
export const UPDATE_DELIVERY_ZONE = "UPDATE_DELIVERY_ZONE"
export const DELETE_DELIVERY_ZONE = "DELETE_DELIVERY_ZONE"
export const ASSIGN_DRIVER_TO_ZONE = "ASSIGN_DRIVER_TO_ZONE"
export const DELIVERY_ZONES_SELECT_LIST = "DELIVERY_ZONES_SELECT_LIST"

export const getDeliveryZones = () => (dispatch) => {
    const res = getRequest('admin/delivery_zones').then(response => {
        dispatch({
            type: GET_DELIVERY_ZONES,
            payload: response.data
        });
        message.success('DeliveryZone Fetch!')
    }).catch(error => {
        message.error("Couldn't get DeliveryZone!")
    });
}

export const createDeliveryZone = (data) => (dispatch) => {
    const res = postRequest('admin/delivery_zone/create', data).then(response => {
        dispatch({
            type: CREATE_DELIVERY_ZONE,
            payload: response.data
        });
        message.success('DeliveryZone Created!')
        dispatch(getDeliveryZoneList())
        
    }).catch(error => {
        message.error('Create DeliveryZone: Something went wrong!')
    });
}

export const getDeliveryZone = (id) => (dispatch) => {
    const res = getRequest(`admin/delivery_zone/edit/${id}`).then(response => {
        dispatch({
            type: GET_DELIVERY_ZONE,
            payload: response.data
        });
    });
}

export const updateDeliveryZone = (data, navigate) => (dispatch) => {

    const res = postRequest('admin/delivery_zone/update', data).then(response => {
        dispatch({
            type: UPDATE_DELIVERY_ZONE,
            payload: response.data
        });
        message.success('DeliveryZone Updated!')
        dispatch(getDeliveryZoneList())

        navigate.push('/admin/delivery_zones')
        
    }).catch(error => {
        message.error('DeliveryZone update: something went wrong!')
    });
}

export const deleteDeliveryZone = (id) => (dispatch) => {

    const res = deleteRequest(`admin/delivery_zone/delete/${id}`).then(response => {
        dispatch({
            type: DELETE_DELIVERY_ZONE,
            payload: response.data
        });
        message.success('DeliveryZone Deleted!')
    }).catch(error => {
        message.error('Driver Delete: Something went wrong!')
    });
}


export const assignDriverToZone = (data) => (dispatch) => {

    const res = postRequest(`admin/delivery_zone/assign_zone/driver`, data).then(response => {
        dispatch({
            type: ASSIGN_DRIVER_TO_ZONE,
            payload: response.data
        });

        message.success('DeliveryZone assigned!')
    }).catch(error => {
        message.error('assign_zone : Something went wrong!')
    });
}


export const assignAddressToZone = (data) => (dispatch) => {

    const res = postRequest(`admin/delivery_zone/assign_zone/address`, data).then(response => {
        dispatch({
            type: ASSIGN_DRIVER_TO_ZONE,
            payload: response.data
        });

        message.success('DeliveryZone assigned!')
    }).catch(error => {
        message.error('assign_zone : Something went wrong!')
    });
}


export const getDeliveryZoneList = () => (dispatch) => {
    const res = getRequest('admin/delivery_zone/select').then(response => {
        dispatch({
            type: DELIVERY_ZONES_SELECT_LIST,
            payload: response.data
        });
    });
}



