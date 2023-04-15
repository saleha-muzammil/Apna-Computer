import React from 'react';

function MyButton({ text, link }) {
  const handleClick = () => {
    window.location.href = link;
  }

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

export default MyButton;
