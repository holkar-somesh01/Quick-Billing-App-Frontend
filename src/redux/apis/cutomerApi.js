import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const customerAPi = createApi({
    reducerPath: "customerAPi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/customer`, credentials: "include" }),
    tagTypes: ["customer"],
    endpoints: (builder) => {
        return {
            GetAllCustomer: builder.query({
                query: (id) => {
                    return {
                        url: `/fetch-customer`,
                        method: "GET"
                    }
                },
                providesTags: ["customer"],
                transformResponse: data => data.result
            }),
            RegisterCustomer: builder.mutation({
                query: userData => {
                    return {
                        url: `/register-customer`,
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["customer"]
            }),

        }
    }
})

export const {
    useLazyGetAllCustomerQuery,
    useGetAllCustomerQuery,
    useRegisterCustomerMutation,
} = customerAPi
