import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: 'navbarState',
    initialState: {
        activeNavItem: 'home',
    },
    reducers: {
        handleActivatedNavItem: (state, event) => {
            const scrollY = event.payload;
            if(scrollY < 1150){
                state.activeNavItem = 'home'
            }
            else if(scrollY < 3200){
                state.activeNavItem = 'fitur';
            }
            else if(scrollY < 3900) {
                state.activeNavItem = 'testimoni'
            } else{
                state.activeNavItem = 'harga'
            }
        }
    }
});

export const { handleActivatedNavItem } = navbarSlice.actions;

export const activeNavItem = (state) => state.navbarState.activeNavItem;

export default navbarSlice.reducer;