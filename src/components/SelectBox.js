import React, { Component } from "react";
import "./SelectBox.css";

function Item(text) {
  return <div className="select-item"></div>;
}
class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      items: props.items,
    };
  }

  render() {
    return (
      <select id="tags">
        <option value="0">{this.props.name}</option>
        {this.state.items.map((tag, index) => {
          return (
            <option className="select-item" value={index + 1} key={index + 1}>
              {tag.toUpperCase()}
            </option>
          );
        })}
      </select>
    );
  }
}

export default SelectBox;
