import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from 'antd';

export const GET_MEDIA_FILES = "GET_MEDIA_FILES"

// Make an API request to upload a file
export const uploadFile = (file) => {
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
    };

    const formData = new FormData();
    formData.append('file', file);
    return postRequest('media/upload', formData, config).then(response => {
        console.log(response.data)
        dispatch({
            type: GET_MEDIA_FILES,
            payload: response.data
        });
    });
};



// Make an API request to retrieve media files
export const getMediaFiles = () => (dispatch) => {
    const res = getRequest('media/files').then(response => {
        dispatch({
            type: GET_MEDIA_FILES,
            payload: response.data
        });
    });
};

export const getMediaFile = (id) => {
    const res = getRequest(`media/get/${id}`).then(response => {
        return response.data
    });
    return {}
};
