
import React, { useEffect, useState } from "react";

function TodoText({text}) {
  return (
    <p>Das steht im Input: {text}</p>
  )
}

function TodoList({todos, setTodos}) {
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if(todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos)); // Lade Todos aus localStorage
    }
  }, []);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Eingabefeld zurücksetzen
    }
  };

  return (
    <div>
      <h3>To-Do Liste</h3>
      <TodoText text={newTodo} />
      <input
        type="text"
        value={newTodo}
        onChange={(onChangeEvent) => {
          setNewTodo(onChangeEvent.target.value)}
        }
        placeholder="Neue Aufgabe hinzufügen"
      />
      <button onClick={addTodo}>Hinzufügen</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
