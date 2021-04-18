import React, { Component } from "react";
import SelectBox from "./SelectBox";
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
        <SelectBox name="TAG" items={this.state.tags} />
        <div className="mid-container">
          <span className="material-icons md-36">add</span>
        </div>
      </span>
    );
  }
}

export default NewTodo;
