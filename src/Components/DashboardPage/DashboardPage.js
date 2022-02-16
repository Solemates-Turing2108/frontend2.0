import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import DashShoeCard from '../DashShoeCard/DashShoeCard';
import { getUserListings } from '../../Services/api/apiCalls';


const DashboardPage = ({ userID }) => {
  const [displayedShoes, setDisplayedShoes] = useState([]);
  const [toggleGetData, setToggleGetData] = useState(true);

  useEffect(() => {
    if(toggleGetData) {
      getUserListings(userID)
      .then(userListingData => setDisplayedShoes(userListingData.shoes));
      setToggleGetData(false);
    }
  }, [toggleGetData]);

  const updateDisplay = () => {
    setToggleGetData(true);
  };

    const shoeListings = displayedShoes.map((shoe) => {
      return <DashShoeCard key={shoe.id} shoeData={shoe} updateDisplay={updateDisplay}/>
    });

      return (
    <>
        <h1>Dashboard</h1>
        <p>User's ID: {userID}</p>
        <h3>All Shoes Listing Below</h3>'
        <ul>
          {shoeListings.length > 0 ? shoeListings : <h1>No Listings...</h1>}
        </ul>
    </>
  );
}

export default DashboardPage;