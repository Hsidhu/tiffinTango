import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"

import { message } from 'antd';

export const GET_SETTINGS = "GET_SETTINGS"
export const SAVE_SETTINGS = "SAVE_SETTINGS"

export const getSettings = (code) => (dispatch) => {
    const res = getRequest(`settings/${code}`).then(response => {
        dispatch({
            type: GET_SETTINGS,
            payload: response.data
        });
    });
}

export const saveSettings = (data) => (dispatch) => {
    const res = postRequest('settings/save', data).then(response => {
        dispatch({
            type: SAVE_SETTINGS,
            payload: response.data
        });
        message.success({
            content: 'This is a prompt message with custom className and style',
            style: {
                padding:'20px',
                marginTop: '5vh',
            }
        });
    }).catch(error => {
        message.error('something is wrong')
    });;
}
