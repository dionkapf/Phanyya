import Header from "./components/Header.js";
import Todos from "./components/Todos.js";
import NewTodo from "./components/NewTodo.js";
import "./App.css";
import TodosContextProvider from "./contexts/TodosContext.js";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <Header />
      <TodosContextProvider>
        <NewTodo tags={["Home", "Work", "Study", "Academic", "Personal"]} />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
