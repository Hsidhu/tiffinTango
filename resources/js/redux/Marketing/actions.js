import { getRequest, postRequest, deleteRequest } from "../../config/axiosClient"
import { message } from "antd";
import { displayErrors } from "../../config/helpers"

export const SEND_BULK_EMAIL = "SEND_BULK_EMAIL";

export const bulkEmail = (data, history) => (dispatch) => {
    const res = postRequest('admin/marketing/bulkEmail', data).then(response => {
        
        message.success('Email Sent!');
    }).catch(error => {
        message.error(<div>{displayErrors(error.response.data)}</div>, 10);
    });
}
