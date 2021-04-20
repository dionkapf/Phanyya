import React, { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { text: "Cook the dishes", tag: "HOME", completed: true },
    {
      text: "Read The Sun Will Rise Again (and cry)",
      tag: "STUDY",
      completed: false,
    },
    { text: "Eat push ups", tag: "PERSONAL", completed: true },
    { text: "Synergise rough draft", tag: "ACADEMIC", completed: true },
  ]);

  const addNewTodo = (todo) => {
    setTodos({
      ...todos,
      todo,
    });
  };

  return (
    <TodosContext.Provider value={{ todos }}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
