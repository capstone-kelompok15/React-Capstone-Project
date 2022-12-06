import { createSlice } from "@reduxjs/toolkit";

const invoiceDetailSlice = createSlice({
    name: 'invoiceDetail',
    initialState: {
        detailData: undefined,
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