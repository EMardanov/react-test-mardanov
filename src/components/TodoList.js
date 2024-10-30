import React, { useEffect, useState } from 'react';

function TodoText({text}){
  return <p>Das steht im Input: {text}</p>

}

function TodoList() {
    const [todos, setTodos] = useState([]); // useState zum Verwalten der Aufgabenliste
    const [newTodo, setNewTodo] = useState(''); // useState zum Verwalten des Eingabefeldes

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
  
    const handleAddTask = () => {
      if (newTodo.trim() === '') return; // Überprüfe, ob das Eingabefeld leer ist
      setTodos([...todos, newTodo]); // Füge die neue Aufgabe zur Liste hinzu
      setNewTodo(''); // Leere das Eingabefeld
    };

    return (
      <div>
        <h1>Todo Liste</h1>
        <TodoText text = {newTodo} />
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} // Aktualisiere den Eingabewert
          placeholder='Neue Aufgabe hinzufügen'
        />
        <button onClick={handleAddTask}>Hinzufügen</button>
        <ul>
          {todos.map((task, index) => (
            <li key={index}>{task}</li> // Zeige jede Aufgabe in der Liste an
          ))}
        </ul>
      </div>
    );
  }

  export default TodoList;