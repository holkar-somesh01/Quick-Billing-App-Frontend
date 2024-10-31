import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/product`, credentials: "include" }),
    tagTypes: ["product"],
    endpoints: (builder) => {
        return {
            FetchProducts: builder.query({
                query: (id) => {
                    return {
                        url: `/fetch-post/${id}`,
                        method: "GET"
                    }
                },
                providesTags: ["product"],
                transformResponse: data => data.result
            }),
            AddProducts: builder.mutation({
                query: ProductData => {
                    return {
                        url: `/add-post`,
                        method: "POST",
                        body: ProductData
                    }
                },
                invalidatesTags: ["product"]
            }),
            UpdateProduct: builder.mutation({
                query: ProductData => {
                    return {
                        url: `/update-post/${ProductData._id}`,
                        method: "PUT",
                        body: ProductData
                    }
                },
                invalidatesTags: ["product"]
            }),
            deleteProduct: builder.mutation({
                query: ProductData => {
                    return {
                        url: `/delete-post/${ProductData._id}`,
                        method: "DELETE",
                        // body: ProductData
                    }
                },
                invalidatesTags: ["product"]
            }),

        }
    }
})

export const {
    useFetchProductsQuery,
    useAddProductsMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi
