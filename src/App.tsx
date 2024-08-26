// src/App.tsx
import React, { useState } from 'react';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.js';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={setPage} />;
      case 'about':
        return <AboutPage onNavigate={setPage} />;
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;