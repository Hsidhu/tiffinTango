import { all, call, put, takeLatest } from 'redux-saga/effects'
import actions from '../Authenticate/actions';
import { postRequest, getCustomRequest, getRequest, deleteRequest } from '../../config/axiosClient'
import { message } from 'antd';

function* login(action) {
    try {
        yield call(() => getCustomRequest('sanctum/csrf-cookie'));
        const response = yield call(() => postRequest('login', action.payload));
        // store token inn local Storage
        localStorage.setItem("token", response.data.access_token);

        yield put({ type: actions.LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: actions.LOGIN_FAILURE });
        console.log(error)
        if (error.response.status === 401) {
            message.error(error.response.data.message);
        } else {
            message.error('Something Went Wrong');
        }
    }
}

function* register(action) {
    try {
        const response = yield call(() => postRequest('register', action.payload));
        yield put({ type: actions.REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: actions.REGISTER_FAILURE });
        if (error.response.status === 422) {
            message.error(error.response.data.errors.join(','));
        } else {
            message.error('Something Went Wrong');
        }
    }
}

function* getAuthUser() {
    try {
        const response = yield call(() => getRequest('auth/user'));
        yield put({ type: actions.GET_AUTH_USER_SUCCESS, payload: response.data });
    } catch (error) {
        localStorage.removeItem("token")
        yield put({ type: actions.GET_AUTH_USER_FAILURE });
    }
}

function* logout() {
    try {
        yield call(() => deleteRequest('logout'));
        localStorage.removeItem("token")
        yield put({ type: actions.LOGOUT_SUCCESS });
    } catch (e) {
        yield put({ type: actions.LOGOUT_FAILURE });
    }
}

function* updatePassword(action){
    try {
        const response = yield call(() => postRequest('auth/updatePassword', action.payload));
        yield put({ type: actions.UPDATE_PASSWORD, payload: response.data });
    } catch (error) {
        if (error.response.status === 422) {
            message.error(error.response.data.errors.join(','));
        } else {
            message.error('Something Went Wrong');
        }
    }
}


export default function* rootSaga() {
    yield all([takeLatest(actions.LOGIN, login)]);
    yield all([takeLatest(actions.GET_AUTH_USER, getAuthUser)]);
    yield all([takeLatest(actions.LOGOUT, logout)]);
    yield all([takeLatest(actions.REGISTER, register)]);
    yield all([takeLatest(actions.UPDATE_PASSWORD, updatePassword)]);
}
