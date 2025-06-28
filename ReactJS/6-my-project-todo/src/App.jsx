

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import { TodoItemProvider } from "./store/todoContextApi";


function App() {

  
  return (
    <TodoItemProvider>
      <center>
        <AppName />
        <AddTodo />
        <TodoItems />
      </center>
    </TodoItemProvider>
  );
}

export default App;
