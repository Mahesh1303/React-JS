import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // everytodo consit of id,title,completed?
  // this whole thing also consist of functionalities such as add todo delete todo edittodo todoCompleted or not that checkbox thing

  todos: [
    {
      todoId: 1,
      todoTitle: "",
      todoStatus: false, // todo status that is isit completed or not so we could toogle that afterwords
    },
  ],

  addTodo: (todo) => {},
  updateTodoTitle: (id, todoTitle) => {},
  deleteTodo: (id) => {},
  ToogleTodoStatus: (id) => {},
});

export const UseTodoContext = () => {
  return useContext(TodoContext);
};

//to wrap everything into that todo to provide it
export const TodoContextProvider = TodoContext.Provider;
