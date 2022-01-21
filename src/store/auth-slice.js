import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        isNavBar: true,
    },
    reducers: {
        login(state, action) {
            console.log("Updating login sate", action);
            state.isLoggedIn = true;
            state.isNavBar = false;
            //state.user = action.payload.user;
        },
        logout(state, action) {
            state.isLoggedIn = false;
            state.isNavBar = true;
        },
        register(state, action) {},
    },
});

export const authActions = authSlice.actions;
export default authSlice;