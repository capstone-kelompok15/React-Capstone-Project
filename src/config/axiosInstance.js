import axios from "axios";
import CONST from "../utils/constants";

const config = {
    baseURL: CONST.BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
}

const axiosInstance = axios.create(config);

export default axiosInstance;