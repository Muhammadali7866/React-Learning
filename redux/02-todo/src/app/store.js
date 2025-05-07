import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todos/todoSlice";
// in this file we configure the redux 

export const store = configureStore({
    reducer:{
        todo:todoSlice.reducer
    }
})
