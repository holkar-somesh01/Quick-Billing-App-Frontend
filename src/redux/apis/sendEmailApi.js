import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const sendEmailApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:5000/api/bill-mail", credentials: "include"
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/bill-mail`, credentials: "include"
    }),
    tagTypes: ["mail"],
    endpoints: (builder) => {
        return {
            // getUsers: builder.query({
            //     query: () => {
            //         return {
            //             url: "/apiEndPoint",
            //             method: "GET"
            //         }
            //     },
            //     providesTags: ["mail"]
            // }),
            SendBillMail: builder.mutation({
                query: billData => {
                    return {
                        url: "/send-bill",
                        method: "POST",
                        body: billData
                    }
                },
                invalidatesTags: ["mail"]
            }),

        }
    }
})

export const { useSendBillMailMutation } = sendEmailApi
