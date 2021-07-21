import React from 'react';
import Navbar from './Navbar';
import App from './App';
import '../style/style.css';

const Calculator = () => (
  <div className="first-div calc-first-div">
    <Navbar />
    <div className="calc-div">
      <h2 className="calc-h2">Let&apos;s do some math!</h2>
      <App />
    </div>
  </div>
);

export default Calculator;
