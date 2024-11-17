import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./Todoslice";

// configue store in toolkit and create store in redux


export const store = configureStore(
    {

        reducer: TodoReducer,
           }
    
)