// src/components/HomePage.jsx
import React from 'react';
import '../styles/Common.css';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="page">
      <nav className="navbar">
        <ul>
          <li><a href="#home" onClick={() => onNavigate('home')}>Home</a></li>
          <li><a href="#about" onClick={() => onNavigate('about')}>About</a></li>
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