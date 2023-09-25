import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"


export const SELECT_MEALPLAN = "SELECT_MEALPLAN"
export const SELECT_MEALPLAN_OPTIONS = "SELECT_MEALPLAN_OPTIONS"
export const ORDER_META_DATA = "ORDER_META_DATA"
export const ORDER_CUSTOMER_INFO = "ORDER_META_DATA"





export const selectMealPlan = (selectedMealPlanID) => (dispatch) => {
    dispatch({
        type: SELECT_MEALPLAN,
        payload: selectedMealPlanID
    });
}

export const selectMealPlanOption = (selectedMealPlanOptions) => (dispatch) => {
    dispatch({
        type: SELECT_MEALPLAN_OPTIONS,
        payload: selectedMealPlanOptions
    });
}

export const setOrderMetaData = (data) => (dispatch) => {
    dispatch({
        type: SELECT_MEALPLAN_OPTIONS,
        payload: data
    });
}
