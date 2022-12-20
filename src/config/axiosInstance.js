import axios from "axios";
import { async } from "q";
import CONST from "../utils/constants";

const config = {
    baseURL: CONST.BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
}

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
    (response) => {
        const token = localStorage.getItem('token');
        if(token !== null){
            response.headers.Authorization = `Bearer ${token}`;
        }
        return response;
    },
);

axiosInstance.interceptors.response.use(response => response, async (error) => {
    if(error.response.request.status === 401){
        try{
            const response = await axiosInstance.post('/auth/admin/refresh', {refresh_token: localStorage.getItem('refresh_token')});
            localStorage.setItem('token', response.data.data.access_token);
            return axiosInstance(error.config);
        } catch(e){
            if(e.response.request.status === 401){
                return Promise.reject(e);
            }
        }
    }
    return Promise.reject(error);
})

export default axiosInstance;