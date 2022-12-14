import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InvoiceAPI from "../../api/InvoiceAPI";

export const register = createAsyncThunk("post/register", async (data, {rejectWithValue, fulfillWithValue}) => {
    try{
        const response = await InvoiceAPI.register(data);
        return fulfillWithValue(response.data)
    } catch(e){
        return rejectWithValue(e.response.data.error);
    }
});

const initialState = {
    loading: false,
    succeed: false,
    error: false,
    errMsg: ''
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        clearState(state){
            state = initialState;
        }
    },
    extraReducers(builder){
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.succeed = false;
            state.error = false
        })
        .addCase(register.fulfilled, (state) => {
            state.succeed = true;
            state.loading = false;
            state.error = false;
        })
        .addCase(register.rejected, (state, action) => {
            state.error = true;
            state.succeed = false;
            state.loading = false;
            state.errMsg = action.payload.detail;
        })
    }
})

export const { clearState } = registerSlice.actions;

export const getRegisterState = (state) => state.register;

export default registerSlice.reducer;