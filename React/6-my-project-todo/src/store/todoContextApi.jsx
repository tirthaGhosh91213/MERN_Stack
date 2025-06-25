import { Children, createContext, useState } from "react";
import initialTodoItems from "./InitialTodoItems";

export const TodoItemContext=createContext();

export const TodoItemProvider=({Children})=>{
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addTodoItem = (todoText, todoDate) => {
    setTodoItems(currentItems => {
      return [...currentItems, { id: todoText, todoText, todoDate }]
    })
  }

  const deleteTodoItem = (todoId) => {
    setTodoItems(currentItems => {
      return currentItems.filter(item => item.id !== todoId);
    })
  }
  return <TodoItemContext.Provider value={{todoItems,addTodoItem,deleteTodoItem}}>{Children}</TodoItemContext.Provider>
}

