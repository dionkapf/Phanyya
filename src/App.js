import Header from "./components/Header.js";
import Todos from "./components/Todos.js";
import "./App.css";
import NewTodo from "./components/NewTodo.js";

function App() {
  const todos = [
    { text: "Cook the dishes", tag: "HOME" },
    { text: "Read The Sun Will Rise Again (and cry)", tag: "STUDY" },
    { text: "Eat push ups", tag: "PERSONAL" },
    { text: "Synergise rough draft", tag: "ACADEMIC" },
  ];
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <Header />
      <NewTodo tags={["Home", "Work", "Study", "Academic", "Personal"]} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
