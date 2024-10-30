import React, {Component} from 'react';
import LikeButton from './components/LikeButton';
import TodoList from './components/TodoList';
import AppNew from './components/TodoListNew';




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
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Message message="classic"/>
          <MessageFunky message="funky" />
        </p>
        <AppNew />
        <TodoList />
        <p>
          I do it.
        </p>
        <LikeButton  />
      </header>
    </div>
  );
}

export default App;
