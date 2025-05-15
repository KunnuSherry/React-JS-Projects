import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./slices/blogSlice";

const store = configureStore({
    reducer:{
        // counter:counterReducer,
        blog: blogSlice.reducer
    },
});

export default store;