import React from 'react';

function Card({ heading, body, button }) {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{body}</p>
      <button>{button}</button>
    </div>
  )
}

export default Card
