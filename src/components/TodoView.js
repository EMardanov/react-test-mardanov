
import React from "react";

function TodoView({todos}) {
  return (
    <div style={{position: "absolute", right: 100, color: "white"}}>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoView;
