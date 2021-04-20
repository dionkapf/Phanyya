import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import TodoItem from "./TodoItem.js";

function Todos() {
  const { todos } = useContext(TodosContext);
  return (
    <div>
      {todos.map((todo, index) => {
        return <TodoItem key={index} todo={todo} />;
      })}
    </div>
  );
}
export default Todos;
