import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';

const Navbar = () => (
  <div className="header-navbar">
    <div className="header-icon">
      <h1>Math Magicians</h1>
      <i className="fas fa-hat-wizard" />
    </div>
    <ul className="nav-ul">
      <li className="li-separator"><Link to="/">Home</Link></li>
      <li className="li-separator"><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote-of-the-day">Quote of the Day</Link></li>
    </ul>
  </div>
);

export default Navbar;
