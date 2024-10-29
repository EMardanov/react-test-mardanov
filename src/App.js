import React, {Component} from 'react';
import LikeButton from './LikeButton';
import TodoList from './TodoList';
import AppNew from './TodoListNew';




import logo from './logo.svg';
import './App.css';


class Message extends Component{
  render() {
    return <p>{this.props.message}</p>
  }
}

function MessageFunky(props){
  return <p>{props.message}</p>
}

function App() {
  return (
    <div className="App">
      <Message message="classic"/>
      <MessageFunky message="funky" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppNew />
        <TodoList />
        <p>
          I do it.
        </p>
        <LikeButton  />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
