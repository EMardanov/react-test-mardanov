import React, { useState } from 'react';

function LikeText({likes, text}) { // {likes: 32}
  return (
    <p>
      The counter is now: {likes}
      <br />
      {text}
    </p>
  )
}
function LikeButton() {
  const [likes, setLikes] = useState(0); // State für Likes
  function handleClick() {
    setLikes(likes + 1); // Erhöht den Like-Zähler
  }
  return (
    <>
      <button onClick={handleClick}>
        Likes: {likes}
      </button>
      <LikeText likes={likes} text="Hallo Welt" />
    </>
  );
}
export default LikeButton;