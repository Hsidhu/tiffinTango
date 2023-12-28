import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from 'antd';
import { displayErrors, fileFormconfig } from "../../config/helpers"

export const GET_MEALPLANS = "GET_MEALPLANS"
export const GET_MEALPLAN = "GET_MEALPLAN"
export const CREATE_MEALPLAN = "CREATE_MEALPLAN"
export const CREATE_MEALPLAN_OPTION = "CREATE_MEALPLAN_OPTION"
export const GET_MEALPLAN_OPTIONS = "GET_MEALPLAN_OPTIONS"
export const GET_MEALPLAN_SELECT_DATA = "GET_MEALPLAN_SELECT_DATA";

export const getMealPlans = () => (dispatch) => {
    const res = getRequest('mealplan').then(response => {
        dispatch({
            type: GET_MEALPLANS,
            payload: response.data
        });
        dispatch({
            type: GET_MEALPLAN,
            payload: {}
        });
    });
}

export const createMealPlan = (data, history) => (dispatch) => {

    const formData = new FormData();
    for ( var key in data ) {
        formData.append(key, data[key]);
    }

    const res = postRequest('admin/mealplan/create', formData).then(response => {
        console.log(response.data)
        dispatch({
            type: GET_MEALPLANS,
            payload: response.data
        });
        message.success('Mealplan created!');
        history.push('/admin/mealplans')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const createMealPlanOption = (data) => (dispatch) => {

    const res = postRequest('admin/mealplan/create/option', data).then(response => {
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

export const updateMealPlan = (data, history) => (dispatch) => {
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
        history.push('/admin/mealplans')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}


export const createMealPlanAddon = (data, history) => (dispatch) => {

    const res = postRequest('admin/mealplan/create/addon', data).then(response => {
        dispatch({
            type: CREATE_MEALPLAN_OPTION,
            payload: response.data
        });
        message.success('MealPlan Addons Created!');
        history.push('/admin/mealplans')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const getMealPlanSelectData = () => (dispatch) => {
    const res = getRequest(`admin/mealplan/list`).then(response => {
        dispatch({
            type: GET_MEALPLAN_SELECT_DATA,
            payload: response.data
        });
    });
}

export const getMealPlanOptions = () => (dispatch) => {
    const res = getRequest(`mealplan/options/list`).then(response => {
        dispatch({
            type: GET_MEALPLAN_OPTIONS,
            payload: response.data
        });
    });
}

export const removeMealPlanAddon = (mealPlanID, optionID) => (dispatch) => {

    const res = deleteRequest(`admin/mealplan/remove/addon/${mealPlanID}/${optionID}`).then(response => {
        message.success('MealPlan Addon Deleted!');
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}



export const addMedia = (data) => (dispatch) => {
    const res = postRequest('admin/mealplan/addMedia', data, fileFormconfig).then(response => {
        dispatch({
            type: GET_MEALPLAN,
            payload: response.data
        });
        message.success('Media Added Done!')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}

export const removeMedia = (data) => (dispatch) => {
    const res = postRequest('admin/mealplan/removeMedia', data).then(response => {
        dispatch({
            type: GET_MEALPLAN,
            payload: response.data
        });
        message.success('Media Removed Done!')
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}
