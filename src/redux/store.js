import { configureStore } from "@reduxjs/toolkit";
import filterModalSlice from "./reducers/filterModalSlice";
import invoiceDetailSlice from "./reducers/invoiceDetailSlice";
import invoicesSlice from "./reducers/invoicesSlice";
import navbarSlice from "./reducers/navbarSlice";
import paymentDetailSlice from "./reducers/paymentDetailSlice";
import paymentFilterModalSlice from "./reducers/paymentFilterModalSlice";
import paymentRejectionModalSlice from "./reducers/paymentRejectionModalSlice";
import paymentSlice from "./reducers/paymentSlice";
import registerSlice from "./reducers/registerSlice";
import verificationSlice from "./reducers/verificationSlice";

export const store = configureStore({
    reducer: {
        navbarState: navbarSlice,
        invoices: invoicesSlice,
        filterModal: filterModalSlice,
        invoiceDetail: invoiceDetailSlice,
        payments: paymentSlice,
        paymentDetail: paymentDetailSlice,
        paymentModal: paymentFilterModalSlice,
        rejectionModal: paymentRejectionModalSlice,
        register: registerSlice,
        verificationState: verificationSlice
    },
})