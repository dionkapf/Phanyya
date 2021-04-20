import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [text, setText] = useState(props.todo.text);
  const [tag, setTag] = useState(props.todo.tag);
  const [active, setActive] = useState(false);

  const toggleActive = (currentActive) => {
    setActive(!currentActive);
  };

  return (
    <span
      className={active ? "container neumorphic-container_active" : "container"}
    >
      <button
        type="button"
        className={
          active
            ? "btn neumorphic-btn neumorphic-checkbox neumorphic-checkbox_active"
            : "btn neumorphic-btn neumorphic-checkbox"
        }
        onClick={toggleActive}
      ></button>
      <p className="todo">{text}</p>
      <div className="mid-container">
        <p className={active ? "tag-active border" : "tag border"}>{tag}</p>
        <div className="material-icons close">close</div>
      </div>
    </span>
  );
}
export default TodoItem;
