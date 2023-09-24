import axios from 'axios';
import { axiosConfig } from './constants';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = axiosConfig.HOST_URL;

axiosClient.defaults.headers = axiosConfig.headers;

// To share cookies to cross site domain, change to true.
axiosClient.defaults.withCredentials = false;
axiosClient.defaults.headers.Authorization = `Bearer ${localStorage.getItem("token", '')}`

export function getCustomRequest(URL) {
  return axios.get(`/${URL}`).then(response => response);
}

export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response);
}
