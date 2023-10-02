import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"

export const GET_MEALPLAN_ORDER_DATA = "GET_MEALPLAN_ORDER_DATA";
export const SELECT_MEALPLAN = "SELECT_MEALPLAN"
export const SELECT_MEALPLAN_OPTIONS = "SELECT_MEALPLAN_OPTIONS"
export const ORDER_META_DATA = "ORDER_META_DATA"
export const ORDER_CUSTOMER_INFO = "ORDER_META_DATA"


export const getMealPlanForOrder = () => (dispatch) => {
    const res = getRequest('mealplanorder/data').then(response => {
        dispatch({
            type: GET_MEALPLAN_ORDER_DATA,
            payload: response.data
        });
    });
}

export const selectMealPlan = (mealPlanObject) => (dispatch) => {
    dispatch({
        type: SELECT_MEALPLAN,
        payload: mealPlanObject
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
