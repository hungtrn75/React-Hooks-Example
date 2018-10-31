import React from "react";
import { produce } from "immer";

import Form from "./Form";
import "./App.css";

// https://github.com/mweststrate/use-immer/blob/master/index.js
function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      todos.unshift({ text: action.text, complete: false });
      return;
    case "TOGGLE_COMPLETE":
      todos[action.index].complete = !todos[action.index].complete;
      return;
    case "RESET":
      return [];
    default:
      return todos;
  }
};

export default () => {
  const [todos, dispatch] = useImmerReducer(todosReducer, []);

  return (
    <div className="App">
      <Form dispatch={dispatch} />
      <div>
        {todos.map(({ text, complete }, index) => (
          <div
            key={index}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETE", index })}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
};
