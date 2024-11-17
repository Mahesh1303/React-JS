import { useState } from "react"
import { UseTodos } from "../contexts/TodoContext"

function TodoForm() {
    const [Todo,SetTodo]=useState("")

    const {AddTodo}=UseTodos()
    const Add=(e)=>{
        e.preventDefault()
        if(!Todo) return
        AddTodo({TodoMsg:Todo,TodoId:Date.now()})
        SetTodo("")
    } 

    return (
        <form onSubmit={Add}  className="flex">
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={Todo}
            onChange={(e) => SetTodo(e.target.value)}
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
    )
}

export default TodoForm