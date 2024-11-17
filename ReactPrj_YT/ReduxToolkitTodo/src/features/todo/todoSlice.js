import { createSlice, nanoid } from "@reduxjs/toolkit";


// slice a bigger version of reducer

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    // this to do is going to go in the store
    // todos: [
    //   {
    //     id: 1,
    //     todomsg: "Hello World",
    //   },
    // ],
    todos: [
      {
        id: 1,
        text: "Hello World",
      },
    ],
  },

  reducers: {
    // it consist of all the methods and actions needed to do something all functionalities

    addTodo: (state, action) => {
      const todo = {
        // id:Date.now()
        id: nanoid(),
        text: action.payload.text,
      }
      state.todos.push(todo)
    },

    // state gives the access of all currently holded values
    // actions are the parameters required for that function such as we used in the add(id)=>{} etc

    removeTodo: (state,action) => {
        state.todos=state.todos.filter((todo)=> todo.id !== action.payload)

    },

    updateTodo:(state,action)=>{
        const{id,text}=action.payload
        state.todos=state.todos.map((todo)=>(todo.id===id ? {...todo,text } :todo))
        
    }
  },
});


// we need to individually export the reducers for the components

export const{addTodo,removeTodo,updateTodo} = todoSlice.actions

// to use thesse functionalities in store we can only share registered actions only 

export const todoReduce= todoSlice.reducer