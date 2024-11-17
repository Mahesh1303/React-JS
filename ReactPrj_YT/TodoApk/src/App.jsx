import { useState } from 'react'
import './App.css'
import { TodosProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
  const [Todos,SetTodos]=useState([])

  const AddTodo=(Todos)=>{
    SetTodos((prev)=>[{...Todos},...prev]  )

  }
  const UpdateTodoMsg=(TodoId,TodoMsg)=>{

    SetTodos((prev)=>prev.map((prevTodo)=>prevTodo.TodoId===TodoId ? {...prevTodo,TodoMsg:TodoMsg} :prevTodo ))

  }


  const DeleteTodo=(TodoId)=>{
    SetTodos(Todos.filter((todo)=> todo.TodoId !==TodoId))
  }


  return (
    <TodosProvider value={{Todos,AddTodo,UpdateTodoMsg,DeleteTodo}}>
      <TodoForm/>
      <div>
        {
          Todos.map( (todo)=>
            <div
            
            key={todo.TodoId}
            >
              <TodoItem todo={todo}/>

            </div>
          
          )

        }

      </div>
    </TodosProvider>
  )
}

export default App
