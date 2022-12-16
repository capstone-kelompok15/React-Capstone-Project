import axiosInstance from "../config/axiosInstance"

const InvoiceAPI = {
    async register(data){
        const response = await axiosInstance.post('/auth/register/merchant', data);
        return response;
    },
    async verifyAccount(data){
        const response = await axiosInstance.post('/auth/verification/admin', data);
        return response;
    },
    async resendVerification(data){
        const response = await axiosInstance.post('/auth/verification/admin/refresh', data);
        return response;
    },
    async login(data){
        const response = await axiosInstance.post('/auth/login/admin', data);
        return response;
    },
    async getInvoices(){
        const response = await axiosInstance.get('/invoices/merchants?limit=100&offset=0');
        return response;
    },
    async getAllCostumer(){
        const response = await axiosInstance.get('/customers?page=1&limit=100');
        return response;
    },
    async createNewInvoice(data){
        const response = await axiosInstance.post('/invoices', data);
        return response;
    },
    async getMerchantData(){
        const response = await axiosInstance.get('/merchants/me');
        return response;
    },
    async getInvoiceDetailById(id){
        const response = await axiosInstance.get(`/invoices/${id}/merchants`);
        return response;
    },
    async getPayemntDetailById(id){
        const response = await axiosInstance.get(`/invoices/${id}/merchants`);
        return response;
    }
}

export default InvoiceAPI;