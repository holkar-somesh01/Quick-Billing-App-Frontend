import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { useDispatch } from "react-redux"


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth`, credentials: "include" }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {
            // ADMIN AUTHENTICATION

            AdminRegister: builder.mutation({
                query: userData => {
                    return {
                        url: "/register-admin",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"]
            }),
            AdminLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-admin",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"],
                transformResponse: (data) => {
                    (localStorage.setItem("admin", JSON.stringify(data.result)))
                    console.log(data.result)
                }
            }),
            AdminOTPVerify: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin-otp",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"],
            }),
            AdminLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-admin",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"],
                transformResponse: (data) => {
                    (localStorage.removeItem("admin"))
                }

            }),
        }
    }
})

export const {
    // ADMIN AUTH
    useAdminRegisterMutation,
    useAdminLoginMutation,
    useAdminOTPVerifyMutation,
    useAdminLogoutMutation
} = authApi
