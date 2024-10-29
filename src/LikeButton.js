import React from 'react';

function LikeButton (){
    const[likes, setLikes] = React.useState(0); //Initialwert 0 für 'likes'.
  
    function handleClick(){
        setLikes(likes + 1);
    }
  
    return <button onClick={handleClick}>Like--({likes})--</button>
  }

  export default LikeButton;