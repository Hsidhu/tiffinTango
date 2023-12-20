import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd"
import { GET_CUSTOMER } from "../Customer/actions";
import { clearFrontendData } from "../Common/actions";

export const GET_MEALPLAN_ORDER_DATA = "GET_MEALPLAN_ORDER_DATA";
export const SET_ORDER_TYPE = 'SET_ORDER_TYPE';
export const CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS';
export const SELECT_MEALPLAN = "SELECT_MEALPLAN";
export const SELECT_MEALPLAN_OPTIONS = "SELECT_MEALPLAN_OPTIONS"
export const ORDER_META_DATA = "ORDER_META_DATA"
export const ORDER_CUSTOMER_INFO = "ORDER_META_DATA"
export const ADD_DELIVERY_CHARGE = "ADD_DELIVERY_CHARGE"
export const ORDER_PLACED = "ORDER_PLACED"
export const ORDER_NEXT_STEP_TRACK = "ORDER_NEXT_STEP_TRACK"
export const ORDER_PREV_STEP_TRACK = "ORDER_PREV_STEP_TRACK"
export const ORDER_RESET_STEP_TRACK = "ORDER_RESET_STEP_TRACK"


export const nextStep = () => (dispatch) => (
    dispatch({
        type: ORDER_NEXT_STEP_TRACK
    })
);

export const prevStep = () => (dispatch) => (
    dispatch({
        type: ORDER_PREV_STEP_TRACK
    })
);

export const resetStep = () => (dispatch) => (
    dispatch({
        type: ORDER_RESET_STEP_TRACK
    })
);

export const getMealPlanForOrder = (delivery_type = '') => (dispatch) => {
    const res = getRequest(`mealplanorder/data?delivery_type=${delivery_type}`).then(response => {
        dispatch({
            type: GET_MEALPLAN_ORDER_DATA,
            payload: response.data
        });
    });
}

export const setOrderType = (type) => (dispatch) => {
    dispatch({
        type: SET_ORDER_TYPE,
        payload: type
    });
}

export const getDeliveryCharge = (coords) => (dispatch) => {
    const res = getRequest('mealplanorder/deliveryCharge').then(response => {
        dispatch({
            type: ADD_DELIVERY_CHARGE,
            payload: response.data
        });
    });
}

export const clearCartselectMealPlan = (mealPlanObject) => (dispatch) => {
    dispatch({
        type: CLEAR_CART_ITEMS,
        payload: {}
    });
}

export const addToCartselectMealPlan = (mealPlanObject) => (dispatch) => {
    dispatch({
        type: SELECT_MEALPLAN,
        payload: mealPlanObject
    });
}

export const removeFromCartselectMealPlan = () => (dispatch) => {
    dispatch({
        type: SELECT_MEALPLAN,
        payload: {}
    });
}

export const selectMealPlanOption = (mealPlanOption) => (dispatch) => {
    dispatch({
        type: SELECT_MEALPLAN_OPTIONS,
        payload: mealPlanOption
    });
}

export const setOrderMetaData = (data) => (dispatch) => {
    dispatch({
        type: SELECT_MEALPLAN_OPTIONS,
        payload: data
    });
}

export const placeOrder = (data, history) => (dispatch) => {

    const res = postRequest('mealplanorder/create', data).then(response => {
        console.log(response.data)
        dispatch({
            type: ORDER_PLACED,
            payload: response.data
        });
        dispatch({
            type: GET_CUSTOMER,
            payload: response.data
        });
        dispatch(clearFrontendData())
        dispatch(nextStep())
        // get email or customer back
        message.success('Order Place sucessfully')

    }).catch(error => {
        console.log(error);
        message.error('Something went wrong please contact us!')
    });
}
