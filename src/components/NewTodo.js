import React, { Component } from "react";
import SelectBox from "./SelectBox";
import "./NewTodo.css";
class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tag: "",
      tags: props.tags,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleTag = this.handleTag.bind(this);
  }

  handleTextChange(e) {
    const text = e.target.value.trim();
    this.setState({ text });
  }

  handleAddButton(e) {
    console.log("TEXT:", this.state.text);
    console.log("TAG:", this.state.tag);
  }

  handleTag(tag) {
    this.setState({ tag });
  }

  render() {
    return (
      <span className={"new-container"}>
        <input
          type="text"
          name="Todo"
          id="new-todo"
          placeholder="Add a new todo"
          onChange={this.handleTextChange}
        />
        <SelectBox name="TAG" items={this.state.tags} getTag={this.handleTag} />
        <div className="mid-container">
          <span className="material-icons md-36" onClick={this.handleAddButton}>
            add
          </span>
        </div>
      </span>
    );
  }
}

export default NewTodo;
