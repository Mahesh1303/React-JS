import { useContext,createContext } from "react";

export const Todos=createContext({
   Todos:[ {
        TodoId:1,
        TodoMsg:"",
    }],

    AddTodo:(Todos)=>{},
    DeleteTodo:(TodoId)=>{},
    UpdateTodoMsg:(TodoId,TodoMsg)=>{},

}


)


export const TodosProvider=Todos.Provider

export const UseTodos=()=>{
    return useContext(Todos)
}
