import React, { Component } from "react";
import "./TodoItem.css";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo.text,
      tag: props.todo.tag,
      active: false,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <span
        className={
          this.state.active
            ? "container neumorphic-container_active"
            : "container"
        }
      >
        <button
          type="button"
          className={
            this.state.active
              ? "btn neumorphic-btn neumorphic-checkbox neumorphic-checkbox_active"
              : "btn neumorphic-btn neumorphic-checkbox"
          }
          onClick={this.toggleActive}
        ></button>
        <p className="todo">{this.state.todo}</p>
        <div className="mid-container">
          <p className={this.state.active ? "tag-active border" : "tag border"}>
            {this.state.tag}
          </p>
          <div className="material-icons close">close</div>
        </div>
      </span>
    );
  }
}

export default TodoItem;
