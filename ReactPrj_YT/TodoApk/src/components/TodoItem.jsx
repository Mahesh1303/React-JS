import { useState } from "react";
import { UseTodos } from "../contexts/TodoContext";

function TodoItem({ todo }) {

    const [TodoMS,setTodoMs]=useState(todo.TodoMsg)
    console.log(todo.TodoMsg)
    
    const{UpdateTodoMsg,DeleteTodo}=UseTodos()

    const EditTodo=()=>{
        UpdateTodoMsg(todo.TodoId,{...todo,TodoMsg:TodoMS})
        

    }
    
    return (
        <div className="flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black">
            <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg`}
              value={TodoMS}
              onChange={(e) => setTodoMs(e.target.value)}
            
          />

        <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={()=>{
            if(todo)
                EditTodo()
        }}
        >
            Edit
        </button>
        <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
         onClick={() => DeleteTodo(todo.TodoId)}>
            Delete
        </button>
        </div>
    );
}

export default TodoItem;
