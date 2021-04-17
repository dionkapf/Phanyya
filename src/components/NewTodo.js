import React, { Component } from "react";
import "./NewTodo.css";
class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: props.tags,
    };
  }
  render() {
    return (
      <span className={"new-container"}>
        <input
          type="text"
          name="Todo"
          id="new-todo"
          placeholder="Add a new todo"
        />
        <select name="tags" id="tags">
          <option value="0">TAG</option>
          {this.state.tags.map((tag, index) => {
            return (
              <option value={index + 1} key={index + 1}>
                {tag.toUpperCase()}
              </option>
            );
          })}
        </select>
        <div className="mid-container">
          <span className="material-icons md-36">add</span>
        </div>
      </span>
    );
  }
}

export default NewTodo;
