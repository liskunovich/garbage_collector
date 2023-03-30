import axios, {AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {LOCALSTORAGE_ACCESS_TOKEN_KEY} from "shared/consts/localstorage";

const token = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);

export const axiosRequestInterceptor = (request: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
    if (token && request.headers) {
        request.headers['Authorization'] = `Bearer ${token}`;
    } else if (request.headers) {
        delete request.headers['Authorization'];
    }
    return request;
};

export const axiosResponseInterceptor = (response: AxiosResponse): AxiosResponse => {
    const { data } = response;
    if (data.access) {
        localStorage.setItem(LOCALSTORAGE_ACCESS_TOKEN_KEY, data.access);
        localStorage.setItem('refresh', data.refresh);
        if (response.headers) {
            response.headers['Authorization'] = `Bearer ${token}`;
        }
    }
    return response;
};

const Api = axios.create({
    baseURL: __IS_DEV__ ? 'http://localhost:8000' : '',
    headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
    },
});

Api.interceptors.request.use(axiosRequestInterceptor, (error) => Promise.reject(error));

Api.interceptors.response.use(axiosResponseInterceptor, (error: AxiosError) => {
    const { detail }: any = error.response?.data;
    if (error.response?.status === 401 && detail !== 'No active account found with the given credentials') {
        localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
        localStorage.removeItem('refresh');
        window.location.reload();
    }
    return Promise.reject(error);
});

export default Api;
