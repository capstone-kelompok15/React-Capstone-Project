import { createSlice } from "@reduxjs/toolkit";

const paymentDetailSlice = createSlice({
    name: 'paymentDetail',
    initialState: {
        detailData : undefined,
    },
    reducers: {
        setPaymentDetailData: (state, event) => {
            state.detailData = event.payload;
        },
    }
})

export const { setPaymentDetailData } = paymentDetailSlice.actions;

export const getPaymentsDetailData = (state) => state.paymentDetail.detailData;

export default paymentDetailSlice.reducer;