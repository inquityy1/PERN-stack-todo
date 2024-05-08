import { Fragment } from "react";
import "./App.css";

//components
import InputTodo from "./components/inputTodo";
import ListTodos from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <InputTodo />
      <ListTodos />
    </Fragment>
  );
}

export default App;
