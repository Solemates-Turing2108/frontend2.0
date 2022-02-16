import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainDisplay from '../MainDisplay/MainDisplay';
import DashboardPage from '../DashboardPage/DashboardPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import ListingForm from '../ListingForm/ListingForm';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<MainDisplay />} />
      <Route path="/shoes/:shoeID" element={<DetailsPage />} />
      <Route path="/dashboard" element={<DashboardPage userID={1}/>} />
      <Route path="add-listing" element={<ListingForm userID={1}/>}/>
    </Routes>
    <NavBar />
    </>
  );
}

export default App;