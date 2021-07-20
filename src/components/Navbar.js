import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';

const Navbar = () => (
  <div className="header-navbar">
    <h1>Math Magicians</h1>
    <ul className="nav-ul">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote-of-the-day">Quote of the Day</Link></li>
    </ul>
  </div>
);

export default Navbar;
