import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"

export const GET_ORDERS = "GET_ORDERS"

export const getOrders = () => (dispatch) => {
    const res = getRequest('orders').then(response => {
        dispatch({
            type: GET_ORDERS,
            payload: response.data
        });
    });
}
