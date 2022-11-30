import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./reducers/navbarSlice";

export const store = configureStore({
    reducer: {
        navbarState: navbarSlice,
    },
})