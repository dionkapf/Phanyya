import React, { createContext, useState } from "react";

export const TagsContext = createContext();

const TagsContextProvider = (props) => {
  const [tags, setTags] = useState([
    "Home",
    "Work",
    "Study",
    "Academic",
    "Personal",
  ]);

  const addNewTag = (tag) => {
    setTags({
      ...tags,
      tag,
    });
  };

  return (
    <TagsContext.Provider value={{ tags }}>
      {props.children}
    </TagsContext.Provider>
  );
};
export default TagsContextProvider;
