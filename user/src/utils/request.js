import axios from 'axios';
import { onResponseError, onResponseSuccess } from './refreshToken';

const getToken = () => {
    return `Bearer ${JSON.parse(localStorage.getItem('userInfo'))?.accessToken}`;
};

const getServerUrl = () => {
    let serverUrl = 'http://localhost:5000/api/v1';
    if (process.env.NODE_ENV == 'production') {
        if (process.env.REACT_APP_SERVER_API_PRODUCTION_URL) {
            serverUrl = String(process.env.REACT_APP_SERVER_API_PRODUCTION_URL);
        }
    } else {
        if (process.env.REACT_APP_SERVER_API_DEVELOPMENT_URL) {
            serverUrl = String(process.env.REACT_APP_SERVER_API_DEVELOPMENT_URL);
        }
    }
    console.log(serverUrl);
    return serverUrl;
};

export const API_FASHIONSHOP = getServerUrl();

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
