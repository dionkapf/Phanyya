// @ts-check
import React, { useState, useContext } from "react";
import { TagsContext } from "../contexts/TagsContext";
import { TodosContext } from "../contexts/TodosContext";
import SelectBox from "./SelectBox";
import "./NewTodo.css";

function NewTodo(props) {
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const tags = useContext(TagsContext);
  const { handleNewTodo } = useContext(TodosContext);

  const handleTextChange = (e) => {
    setText(e.target.value.trim());
  };

  const handleAddButton = (e) => {
    var errorMessage = "";
    const newText = text.trim();
    const newTag = tag.trim();
    newText === "" && (errorMessage += "Please write in a todo!\n");
    newTag === "" && (errorMessage += "Please pick a tag!");
    if (newText === "" || newTag === "") {
      alert(errorMessage);
    } else {
      handleNewTodo(newText, newTag);
      // @ts-ignore
      document.getElementById("new-todo").value = "";
      // @ts-ignore
      document.getElementById("tags").value = 0;
    }
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
        className="new-todo"
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
