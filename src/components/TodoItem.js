import React, { useState, useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import "./TodoItem.css";

function TodoItem(props) {
  const [text] = useState(props.todo.text);
  const [tag] = useState(props.todo.tag);
  const [completed, setCompleted] = useState(props.todo.completed);
  const { handleCompletedChange, handleDeleteTodo } = useContext(TodosContext);

  const toggleActive = (e) => {
    setCompleted(!completed);
    handleCompletedChange(props.todo);
  };
  const deleteTodo = (e) => {
    handleDeleteTodo(e.target.getAttribute("name"));
  };
  return (
    <span
      className={
        completed ? "container" : "container neumorphic-container_active"
      }
    >
      <button
        type="button"
        id={props.todo.id}
        className={
          completed
            ? "btn neumorphic-btn neumorphic-checkbox"
            : "btn neumorphic-btn neumorphic-checkbox neumorphic-checkbox_active"
        }
        onClick={() => toggleActive(completed)}
      ></button>
      <p className="todo">{text}</p>
      <div className="mid-container">
        <p className={completed ? "tag border" : "tag-active border"}>{tag}</p>
        <div
          className="material-icons close"
          onClick={deleteTodo}
          name={props.todo.id}
        >
          close
        </div>
      </div>
    </span>
  );
}
export default TodoItem;
