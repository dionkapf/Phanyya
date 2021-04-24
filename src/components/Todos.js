// @ts-check
import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import TodoItem from "./TodoItem.js";

function Todos() {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
export default Todos;
