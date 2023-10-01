import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./baseApi";
import userSlice from "./userSlice/userSlice";

const store = configureStore({
    reducer: {
        userSlice: userSlice,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;