import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        <h1 className="title">INTernational</h1>
        <a href="https://discord.gg/UM6rDcv7" className="cta-button">Join Us</a>
      </div>
    </div>
  );
};

export default HomePage;