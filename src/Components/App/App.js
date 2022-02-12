import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainDisplay from './MainDisplay/MainDisplay';
import DashboardPage from './DashboardPage';
import DetailsPage from './DetailsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainDisplay />} />
    </Routes>

  );
}

export default App;