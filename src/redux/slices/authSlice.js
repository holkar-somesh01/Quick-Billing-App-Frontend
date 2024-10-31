import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { 
        admin: JSON.parse(localStorage.getItem("admin")),
        bill: JSON.parse(localStorage.getItem("bill"))
     },
    reducers: {
        admin: (state, { payload }) => {
            state.admin = payload
        },
        logoutAdmin: (state, { payload }) => {
            state.admin = null
            localStorage.removeItem("admin")
            localStorage.removeItem("bill")
        },
        totalData: (state, { payload }) => {
            state.bill = payload
            localStorage.setItem("bill",JSON.stringify(payload))
        },
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.AdminOTPVerify.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })

})

export const { admin, logoutAdmin , totalData} = authSlice.actions
export default authSlice.reducer