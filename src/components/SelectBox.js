import React, { Component } from "react";
import "./SelectBox.css";

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      items: props.items,
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(e) {
    const tag = this.state.items.tags[parseInt(e.target.value) - 1].trim();
    this.props.getTag(tag);
  }

  render() {
    return (
      <select id="tags" onChange={this.onSelectChange}>
        <option value="0">{this.props.name}</option>
        {this.state.items.tags.map((tag, index) => {
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
