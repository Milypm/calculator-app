import React from 'react';
import Navbar from './Navbar';
import '../style/style.css';

const Quote = () => (
  <div className="first-div">
    <Navbar />
    <h2 className="quote-h2">
      Mathematics is not about numbers, equations, computations,
      or algorithms: it is about understanding. –William Paul Thurston
    </h2>
  </div>
);

export default Quote;
