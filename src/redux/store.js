
import { configureStore } from "@reduxjs/toolkit";
import TodoReducer  from "./todo/todoslice";


export const store = configureStore({
    reducer: {
        todos: TodoReducer
    },
    //devTools: process.env.NODE_ENV !== 'production',
})