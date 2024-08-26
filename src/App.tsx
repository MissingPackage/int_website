// src/App.tsx
import React, { useState } from 'react';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ContactPage from './components/ContactPage.jsx';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={setPage} />;
      case 'about':
        return <AboutPage onNavigate={setPage} />;
      case 'contact':
        return <ContactPage onNavigate={setPage} />;
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;