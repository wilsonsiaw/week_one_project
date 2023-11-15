import React from 'react';
import './App.css';
import sedan from '../src/images/icon-sedans.svg';
import suv from '../src/images/icon-suvs.svg'
import luxury from '../src/images/icon-luxury.svg';
import Card from './components/Card';


function App() {
  return (
    <div className='card-container'>
      <div className='sedan'>
        <img src={sedan} alt='logo of a sedan'/>
        <Card
        heading='SEDANS'
        body='Choose a sedan for its affordability and excellent
        fuel economy. I deal for cruising in the city or on your next
        road trip'
        button='Learn More'
        />
      </div>
      <div className='suv'>
        <img src={suv} alt='logo of an suv'/>
        <Card
        heading='SUV'
        body='Take an SUV for its spacious interior, power, and versatility.
        Perfect for your next family vacation and off-road adventures.'
        button='Learn More'
        />
      </div>
      <div className='luxury'>
        <img src={luxury} alt='logo of a luxury car'/>
        <Card
        heading='LUXURY'
        body='Cruise in the best car brands without the bloated prices.
        Enjoy the enhanced comfort of a luxury rental and arrive in style.'
        button='Learn More'
        />
      </div>
    </div>
  );
}

export default App;
