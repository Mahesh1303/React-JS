import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    Todos: [
     
    ],  },

   reducers:{

    AddTodo:(state,action)=>{
        const Todo={
            id:nanoid(),
            text:action.payload.text
        }

        state.Todos.push(Todo)
    },

    deleteTodo:(state,action)=>{
        state.Todos=state.Todos.filter((todo)=>todo.id !== action.payload  )

    }
            
            
    }
    


   }

   

);


export const{AddTodo,deleteTodo}=TodoSlice.actions


export const TodoReducer= TodoSlice.reducer