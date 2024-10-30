
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import LikeButton from "./components/LikeButton";
import TodoList from './components/TodoList';
import TodoView from './components/TodoView';
import ContactForm from './components/ContactForm';

import logo from './logo.svg';
import './App.css';

class Message extends Component {
  render() {
    return <p>{this.props.message}</p>
  }
}

function MessageFunky(props) {
  return <p>{props.message}</p>
}

function Header() {
  return <div>Hallo Header</div>;
}

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Router>
        <Header />
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/kontakt">Kontakt</Link>
          <br />
          <Link to="/todo-list">TodoList</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LikeButton />} />
          <Route path="/kontakt" element={<ContactForm />} />
          <Route path="/todo-list" element={<TodoList todos={todos} setTodos={setTodos} />} />
        </Routes>
      </Router>
      <TodoView todos={todos} />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Message message="classic" />
          <MessageFunky message="funky" />
        </p>
        
        
      </header>
    </div>
  );
}

export default App;
