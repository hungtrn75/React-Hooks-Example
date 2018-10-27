import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

export default () => {
  const [todos, setTodos] = useState([]);
  const toggleComplete = index =>
    setTodos(
      todos.map(
        (todo, id) =>
          id === index ? { ...todo, complete: !todo.complete } : todo
      )
    );

  useEffect(() => {
    document.title = `Have ${todos.length} todos`;
  });

  return (
    <div className="App">
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, index) => (
          <div
            key={index}
            onClick={() => toggleComplete(index)}
            style={{ textDecoration: complete ? "line-through" : "" }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>reset</button>
    </div>
  );
};
