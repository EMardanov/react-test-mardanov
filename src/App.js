import React, {Component} from 'react';

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


function LikeButton (){
  const[likes, setLikes] = React.useState(0); //Initialwert 0 für 'likes'.

  function handleClick(){
      setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like--({likes})--</button>
}

function App() {
  return (
    <div className="App">
      <LikeButton  />
      <Message message="classic"/>
      <MessageFunky message="funky" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          I do it.
        </p>
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
