import { configureStore } from "@reduxjs/toolkit";
import filterModalSlice from "./reducers/filterModalSlice";
import invoiceDetailSlice from "./reducers/invoiceDetailSlice";
import invoicesSlice from "./reducers/invoicesSlice";
import navbarSlice from "./reducers/navbarSlice";

export const store = configureStore({
    reducer: {
        navbarState: navbarSlice,
        invoices: invoicesSlice,
        filterModal: filterModalSlice,
        invoiceDetail: invoiceDetailSlice
    },
})