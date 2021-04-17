import Header from "./components/Header.js";
import TodoItem from "./components/TodoItem.js";
import "./App.css";
import NewTodo from "./components/NewTodo.js";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <Header />
      <NewTodo tags={["Home", "Work", "Study", "Academic", "Personal"]} />
      <TodoItem todo="Cook the dishes" tag="HOME" />
      <TodoItem todo="Read The Sun Will Rise Again (and cry)" tag="STUDY" />
      <TodoItem todo="Eat push ups" tag="PERSONAL" />
      <TodoItem todo="Synergise rough draft" tag="ACADEMIC" />
    </div>
  );
}

export default App;
