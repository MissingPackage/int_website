// src/components/HomePage.jsx
import React from 'react';
import '../styles/Common.css';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="page">
      <div className="content">
        <h1 className="title">INTernational</h1>
        <a href="https://discord.gg/UM6rDcv7" className="cta-button">Join Us</a>
      </div>
    </div>
  );
};

export default HomePage;