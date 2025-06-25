import { useContext } from "react";
import TodoItem from "./TodoItem";

const TodoItems = () => {
 const {todoItems}= useContext(TodoItemContext);

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} deleteTodoItem={deleteTodoItem}/>
      ))}
    </>
  );
};

export default TodoItems;