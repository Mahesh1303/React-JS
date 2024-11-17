import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoContextProvider } from "./contexts/TodoContext";
import { stringify } from "postcss";

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prev) => [{ ...todo }, ...prev]);
  };
  const deleteTodo = (todoId) => {
    settodos((prev) => prev.filter((todo) => todo.todoId !== todoId))
  }
  const updateTodoTitle = (id, todoTitle) => {
    settodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.todoId === id ? { ...prevtodo, todoTitle } : prevtodo
      )
    );
  };

  const ToogleTodoStatus = (id) => {
    settodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.todoId === id ? { ...prevTodo, 
          todoStatus: !prevTodo.todoStatus } : prevTodo))
    }

  // Local Storage Concept Whenever you want to use the local storage that is the storage of the browser it can be done
  // through Localstorage.setItem("Key","value") saving into local storage it always stores it in string form so we need to convert it into JSON
  // we can access that local storage by using LocalStorage.getItem("key") method

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) settodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodoTitle, deleteTodo, ToogleTodoStatus }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.todoId} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
