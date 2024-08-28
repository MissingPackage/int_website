// src/App.tsx
import React from 'react';
import HomePage from './components/HomePage.tsx';
import AboutPage from './components/AboutPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import ContactPage from './components/ContactPage.tsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;