import React from 'react';
import './Card.css'

function Card({ heading, body, button }) {
  return (
    <div className='card'>
      <h1 className='heading'>{heading}</h1>
      <p className='body'>{body}</p>
      <button className='btn'>{button}</button>
    </div>
  )
}

export default Card
