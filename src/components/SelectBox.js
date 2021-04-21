import React from "react";
import "./SelectBox.css";

function SelectBox(props) {
  const onSelectChange = (e) => {
    const tag = props.items.tags[parseInt(e.target.value) - 1].trim();
    props.getTag(tag);
  };

  return (
    <select id="tags" onChange={onSelectChange}>
      <option value="0">{props.name}</option>
      {props.items.tags.map((tag, index) => {
        return (
          <option className="select-item" value={index + 1} key={index + 1}>
            {tag.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
}
export default SelectBox;
