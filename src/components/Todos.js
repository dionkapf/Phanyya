import React, { useState } from "react";
import TodoItem from "./TodoItem.js";

function Todos(props) {
  const [todos, setTodos] = useState(props.todos);

  const addNewTodo = (todo) => {
    setTodos({
      ...todos,
      todo,
    });
  };

  return (
    <div>
      {todos.map((todo, index) => {
        return <TodoItem key={index} todo={todo} />;
      })}
    </div>
  );
}
export default Todos;
