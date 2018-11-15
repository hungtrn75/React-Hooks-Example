import React, { useContext } from "react";
import TodoContext from "./TodoContext";

export default function TodoView() {
  const { todos, dispatch } = useContext(TodoContext);
  return (
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
  );
}
