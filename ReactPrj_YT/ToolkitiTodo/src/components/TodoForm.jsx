import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { AddTodo,updateTodo } from "../redux/Todoslice"



function TodoForm() {
    
    const[todoText,settodoText]=useState("")
    const dispatch=useDispatch()

    const Add=(e)=>{
        e.preventDefault()
        dispatch(AddTodo({text:todoText}))
        settodoText("")
    }
    const updatetext=
    
    useEffect(()=>{})


    return (
        <form onSubmit={Add} className="space-x-6 flex justify-center ">
            <input
            type="text"
            placeholder="enter TODO"
            value={todoText}
            onChange={(e)=>settodoText(e.target.value)}
            className="text-gray-600 border-blue-300 border-s-black rounded-3xl p-2"
            >
            
            </input>
            <button type="submit" className="p-4 rounded-full bg-green-700">Add</button>
        </form>
    )
}

export default TodoForm


