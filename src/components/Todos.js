import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos,
    };
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </div>
    );
  }
}

export default Todos;
