import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../../types/auth.types";


const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: true
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setCredentials: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false
        },

        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false
        },
        finishLoading: (state) => {
            state.isLoading = false;
        },
    },
});

export const { setCredentials, logout, finishLoading } = authSlice.actions;

export default authSlice.reducer;