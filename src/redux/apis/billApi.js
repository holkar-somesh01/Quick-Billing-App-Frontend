import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const billApi = createApi({
    reducerPath: "billApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/bill`, credentials: "include" }),
    tagTypes: ["bill"],
    endpoints: (builder) => {
        return {
            GetBillData: builder.query({
                query: () => {
                    return {
                        url: "/fetch-bill",
                        method: "GET"
                    }
                },
                providesTags: ["bill"]
            }),
            CreateCustomerBill: builder.mutation({
                query: userData => {
                    return {
                        url: "/create-bill",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["bill"]
            }),
            UpdateCustomerBill: builder.mutation({
                query: userData => {
                    return {
                        url: "/update-customer-bill",
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["bill"]
            }),
            DeleteCustomerBill: builder.mutation({
                query: (id) => {
                    return {
                        url: `/delete-customer-bill/${id}`,
                        method: "DELETE",
                        // body: userData
                    }
                },
                invalidatesTags: ["bill"]
            }),

        }
    }
})

export const {
    useGetBillDataQuery,
    useLazyGetBillDataQuery,
    useCreateCustomerBillMutation,
    useUpdateCustomerBillMutation,
    useDeleteCustomerBillMutation
} = billApi
