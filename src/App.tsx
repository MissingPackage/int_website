// src/App.tsx
import React from 'react';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;