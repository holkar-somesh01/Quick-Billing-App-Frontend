import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";
import { billApi } from "./apis/billApi";
import { customerAPi } from "./apis/cutomerApi";
import { productApi } from "./apis/productAPi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [billApi.reducerPath]: billApi.reducer,
        [customerAPi.reducerPath]: customerAPi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        AdminAuth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, billApi.middleware, customerAPi.middleware, productApi.middleware]
})

export default reduxStore