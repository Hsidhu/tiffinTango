import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from 'antd';
import { displayErrors } from "../../config/helpers"

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

    const res = postRequest('admin/mealplan/create', formData, config).then(response => {
        console.log(response.data)
        dispatch({
            type: GET_MEALPLANS,
            payload: response.data
        });
        message.success('Success message');
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const createMealPlanOption = (data) => (dispatch) => {

    const res = postRequest('admin/mealplan/create/option', data).then(response => {
        console.log(response.data)
        dispatch({
            type: CREATE_MEALPLAN_OPTION,
            payload: response.data
        });
        message.success('MealPlan SuccessFully created!');
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}


export const getMealPlan = (id) => (dispatch) => {
    const res = getRequest(`admin/mealplan/edit/${id}`).then(response => {
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

    const res = postRequest('admin/mealplan/update', formData, config).then(response => {
        dispatch({
            type: GET_MEALPLAN,
            payload: response.data
        });
        message.success('MealPlan SuccessFully Updated!');
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}


export const createMealPlanAddon = (data) => (dispatch) => {

    const res = postRequest('admin/mealplan/create/addon', data).then(response => {
        dispatch({
            type: CREATE_MEALPLAN_OPTION,
            payload: response.data
        });
        message.success('MealPlan Addon Done!');
    }).catch(error => {
        message.error('something is wrong');
    });
}
