import React from 'react';
import Navbar from './Navbar';
import '../style/style.css';

const Home = () => (
  <div className="first-div">
    <Navbar />
    <div className="home-div">
      <h2 className="home-h2">Welcome to our page!</h2>
      <p>
        This site idea came to us because we wanted to provide a simple, practical
        and efficient solution for doing calculations on the web.
        <br />
        <br />
        We love Math and we know how important it is in our busy current lives to
        have an easy way to execute operations on a friendly environment.
        <br />
        <br />
        Please, go ahead and save us on your Favorites tab!
      </p>
    </div>
  </div>
);

export default Home;
