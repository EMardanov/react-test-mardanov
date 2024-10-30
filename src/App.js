
import React, { Component, useState } from 'react';

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
      <TodoView todos={todos} />
      <ContactForm />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Message message="classic" />
          <MessageFunky message="funky" />
        </p>
        <LikeButton />
        <TodoList todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}

export default App;
