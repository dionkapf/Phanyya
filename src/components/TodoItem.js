import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [text, setText] = useState(props.todo.text);
  const [tag, setTag] = useState(props.todo.tag);
  const [completed, setCompleted] = useState(props.todo.completed);

  const toggleActive = () => {
    setCompleted(!completed);
  };

  return (
    <span
      className={
        completed ? "container" : "container neumorphic-container_active"
      }
    >
      <button
        type="button"
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
        <div className="material-icons close">close</div>
      </div>
    </span>
  );
}
export default TodoItem;
