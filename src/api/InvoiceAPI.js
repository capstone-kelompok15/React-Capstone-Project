import axiosInstance from "../config/axiosInstance"

const InvoiceAPI = {
    async register(data){
        const response = await axiosInstance.post('/auth/register/merchant', data);
        return response;
    },
    async verifyAccount(data){
        const response = await axiosInstance.post('/auth/verification/admin', data);
        return response;
    }
}

export default InvoiceAPI;