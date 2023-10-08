import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import Errors from "../../services/errors"
import { message } from 'antd';

export const GET_MEALPLANS = "GET_MEALPLANS"
export const GET_MEALPLAN = "GET_MEALPLAN"
export const CREATE_MEALPLAN = "CREATE_MEALPLAN"
export const CREATE_MEALPLAN_OPTION = "CREATE_MEALPLAN_OPTION"
export const GET_MEALPLAN_OPTIONS = "GET_MEALPLAN_OPTIONS"

export const getMealPlans = () => (dispatch) => {
    const res = getRequest('mealplan').then(response => {
        dispatch({
            type: GET_MEALPLANS,
            payload: response.data
        });
    });
}

export const getMealPlanOptions = (mealplan_id) => (dispatch) => {
    const res = getRequest(`mealplan/options/${mealplan_id}`).then(response => {
        dispatch({
            type: GET_MEALPLAN_OPTIONS,
            payload: response.data
        });
    });
}

export const createMealPlan = (data) => (dispatch) => {
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
    };
    const formData = new FormData();
    for ( var key in data ) {
        formData.append(key, data[key]);
    }

    let errs= Errors;
    const res = postRequest('mealplan/create', formData, config).then(response => {
        console.log(response.data)
        dispatch({
            type: GET_MEALPLANS,
            payload: response.data
        });
    }).catch(error => {
        errs.setErrors(error.response)
        dispatch({
            type: SET_ERRORS,
            payload: errs
        });
    });
}

export const createMealPlanOption = (data) => (dispatch) => {

    const res = postRequest('mealplan/create/option', data).then(response => {
        console.log(response.data)
        dispatch({
            type: CREATE_MEALPLAN_OPTION,
            payload: response.data
        });
        message.success('This is a success message');
    }).catch(error => {
        message.error('something is wrong');
    });
}


export const getMealPlan = (id) => (dispatch) => {
    const res = getRequest(`mealplan/edit/${id}`).then(response => {
        dispatch({
            type: GET_MEALPLAN,
            payload: response.data
        });
    });
}

export const updateMealPlan = (data) => (dispatch) => {
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
    };
    const formData = new FormData();
    for ( var key in data ) {
        formData.append(key, data[key]);
    }

    let errs= Errors;
    const res = postRequest('mealplan/update', formData, config).then(response => {
        console.log(response.data)
        dispatch({
            type: GET_CUSTOMERS,
            payload: response.data
        });
    }).catch(error => {
        errs.setErrors(error.response)
        dispatch({
            type: SET_ERRORS,
            payload: errs
        });
    });
}


export const createMealPlanAddon = (data) => (dispatch) => {

    const res = postRequest('mealplan/create/addon', data).then(response => {
        console.log(response.data)
        dispatch({
            type: CREATE_MEALPLAN_OPTION,
            payload: response.data
        });
    }).catch(error => {
        message.error('something is wrong');
    });
}
