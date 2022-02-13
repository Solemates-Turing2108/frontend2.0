import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainDisplay from '../MainDisplay/MainDisplay';
import DashboardPage from '../DashboardPage/DashboardPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import ListingForm from '../ListingForm/ListingForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainDisplay />} />
      <Route path="add-listing" element={<ListingForm />}/>
      <Route path="/shoes/:id" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;