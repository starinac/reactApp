/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {Route, Switch} from "react-router-dom"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Form from "./components/Form";
import Output from "./components/Output";
import Nav from "./components/Nav";
import Landing from "./components/Landing";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        {
          todoText: inputValue,
          id: uuidv4(),
          completed: false,
        },
      ]);
    }
    setInputValue("");
  };

  const removeTodo = (id, e) => {
    e.stopPropagation();
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedTodo = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  return (
    <section css={styles} className="main">
      <Nav />
      <div className="container">
      <Switch>
          <Route exact path="/" component={Landing}/>
      </Switch>
        <Output
          removeTodo={removeTodo}
          todos={todos}
          setTodos={setTodos}
          completedTodo={completedTodo}
        />
        <Form
          handleForm={handleForm}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

      </div>
     
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: url('https://images.squarespace-cdn.com/content/v1/5c4ece0e3917ee277d32eaf3/1548680586244-2OCBGM2VS0D8YIWXC33R/ke17ZwdGBToddI8pDm48kM3Uf6dmLLmPITe_Z7KVatR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmpaOvvLUTQyDAaK6CUmEWSei43X4QA7wEiNp0WRy1wQ0_EjqKA8MoHLjA65BvvWqu/workspace.gif') no-repeat center/cover;
  display: flex;
  .container{
    width: 100%;
    max-width: 450px;
    margin: auto;
    filter: drop-shadow(20px 80px 3.75rem crimson);
  }
`;

export default App;
