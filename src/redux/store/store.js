import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todoredux/todoSlice"

export const store = configureStore({
    reducer:todoReducer
})