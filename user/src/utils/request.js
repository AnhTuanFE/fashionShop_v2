import axios from 'axios';
import { onResponseError, onResponseSuccess } from './refreshToken';

const getToken = () => {
    return `Bearer ${JSON.parse(localStorage.getItem('userInfo'))?.accessToken}`;
};

export const API_FASHIONSHOP =
    process.env.NODE_ENV == 'production'
        ? process.env.REACT_APP_SERVER_API_PRODUCTION_URL
        : process.env.REACT_APP_SERVER_API_DEVELOPMENT_URL;

const request = axios.create({
    baseURL: API_FASHIONSHOP,
    headers: {
        authorization: getToken(),
    },
});
request.interceptors.response.use(onResponseSuccess, onResponseError);
export const addressRequest = axios.create({
    baseURL: 'https://provinces.open-api.vn/api',
    params: { depth: 3 },
});
export default request;
