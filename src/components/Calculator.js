import React from 'react';
import Navbar from './Navbar';
import App from './App';
import '../style/style.css';

const Calculator = () => (
  <div className="first-div">
    <Navbar />
    <div className="calc-div">
      <h1>Let&apos;s do some math!</h1>
      <App />
    </div>
  </div>
);

export default Calculator;
