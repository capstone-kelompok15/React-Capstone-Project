import { createSlice } from "@reduxjs/toolkit";

const INVOICE_DETAIL_DUMMY = {
    invoice_id: 1231412,
    merchant_id: 0,
    customer_id: 12,
    customer_name: "Abdullah Nouval Shidqi",
    customer_address: 'Jl. kawista no 2',
    payment_status_id: 0,
    payment_status_name: "Paid",
    payment_type_id: null,
    payment_type_name: null,
    merchant_bank_id: null,
    total_price: 200000,
    product_quantity: 1,
    note: null,
    message: null,
    due_at: "5 December 2022",
    created_at: "24 November 2022",
    updated_at: "string",
    invoice_detail: [
      {
        invoice_detail_id: 0,
        product: "Motor mainan",
        quantity: 1,
        price: 20000,
        created_at: "string",
        updated_at: "string"
      }
    ]
  }

const invoiceDetailSlice = createSlice({
    name: 'invoiceDetail',
    initialState: {
        detailData: INVOICE_DETAIL_DUMMY,
    },
    reducers: {
        setDetailData: (state, event) => {
            state.detailData = event.payload;
        },
    }
})

export const { setDetailData } = invoiceDetailSlice.actions;

export const getDetailData = (state) => state.invoiceDetail.detailData;

export default invoiceDetailSlice.reducer;