import React from "react";
import { produce } from "immer";
import TodoContext from "./TodoContext";

import TodoView from "./TodoView";

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
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoView />
    </TodoContext.Provider>
  );
};
