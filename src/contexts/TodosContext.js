import React, { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Cook the dishes", tag: "HOME", completed: true },
    {
      id: 2,
      text: "Read The Sun Will Rise Again (and cry)",
      tag: "STUDY",
      completed: false,
    },
    { id: 3, text: "Eat push ups", tag: "PERSONAL", completed: true },
    { id: 4, text: "Synergise rough draft", tag: "ACADEMIC", completed: true },
  ]);

  const addNewTodo = ({ text, tag, completed }) => {
    const id = todos[todos.length - 1].id + 1;
    const todo = { id, text, tag, completed };
    setTodos({
      ...todos,
      todo,
    });
  };

  const handleCompletedChange = ({ id }) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return;
      }
    });
  };

  return (
    <TodosContext.Provider value={{ todos, handleCompletedChange }}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
