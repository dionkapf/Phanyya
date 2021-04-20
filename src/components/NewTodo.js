import React, { useState, useContext } from "react";
import { TagsContext } from "../contexts/TagsContext";
import SelectBox from "./SelectBox";
import "./NewTodo.css";

function NewTodo(props) {
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const tags = useContext(TagsContext);
  console.log("TAGS: ", tags);

  const handleTextChange = (e) => {
    setText(e.target.value.trim());
  };

  const handleAddButton = (e) => {
    console.log("TEXT:", text);
    console.log("TAG:", tag);
  };

  const handleTagChange = (tag) => {
    setTag(tag);
  };

  return (
    <span className={"new-container"}>
      <input
        type="text"
        name="Todo"
        id="new-todo"
        placeholder="Add a new todo"
        onChange={handleTextChange}
      />
      <SelectBox name="TAG" items={tags} getTag={handleTagChange} />
      <div className="mid-container">
        <span className="material-icons md-36" onClick={handleAddButton}>
          add
        </span>
      </div>
    </span>
  );
}

export default NewTodo;
