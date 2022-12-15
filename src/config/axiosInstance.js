import axios from "axios";
import CONST from "../utils/constants";

const config = {
    baseURL: CONST.BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
}

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
    async (response) => {
        const token = localStorage.getItem('token');
        if(token !== null){
            response.headers.Authorization = `Bearer ${token}`;
        }
        return response;
    },
    async (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;