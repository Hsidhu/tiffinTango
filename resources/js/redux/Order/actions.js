import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"

export const GET_ORDERS = "GET_ORDERS"
export const GET_ORDER = "GET_ORDER"

export const getOrders = () => (dispatch) => {
    const res = getRequest('orders').then(response => {
        dispatch({
            type: GET_ORDERS,
            payload: response.data
        });
    });
}

export const getOrder = (id) => (dispatch) => {
    const res = getRequest(`order/view/${id}`).then(response => {
        dispatch({
            type: GET_ORDER,
            payload: response.data
        });
    });
}
