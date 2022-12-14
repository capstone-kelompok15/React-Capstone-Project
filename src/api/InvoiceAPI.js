import axiosInstance from "../config/axiosInstance"

const InvoiceAPI = {
    async register(data){
        const response = await axiosInstance.post('/auth/register/merchant', data);
        return response;
    }
}

export default InvoiceAPI;