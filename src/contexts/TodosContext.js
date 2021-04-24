import React, { createContext, useState, useEffect } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [todos, updateTodos] = useState([
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

  useEffect(() => {}, [todos]);

  const handleNewTodo = ({ text, tag, completed }) => {
    const id = todos[todos.length - 1].id + 1;
    const todo = { id, text, tag, completed };
    updateTodos({
      ...todos,
      todo,
    });
  };

  const handleDeleteTodo = (id) => {
    updateTodos(todos.filter((todo) => todo.id !== parseInt(id)));
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
    <TodosContext.Provider
      value={{ todos, handleCompletedChange, handleDeleteTodo }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
