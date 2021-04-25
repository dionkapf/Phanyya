import Header from "./components/Header.js";
import Todos from "./components/Todos.js";
import NewTodo from "./components/NewTodo.js";
import Footer from "./components/Footer.js";
import "./App.css";
import TodosContextProvider from "./contexts/TodosContext.js";
import TagsContextProvider from "./contexts/TagsContext.js";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <Header />
      <TodosContextProvider>
        <TagsContextProvider>
          <NewTodo />
        </TagsContextProvider>
        <Todos />
      </TodosContextProvider>
      <Footer />
    </div>
  );
}

export default App;
