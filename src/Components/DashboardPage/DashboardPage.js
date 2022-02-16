import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import DashShoeCard from '../DashShoeCard/DashShoeCard';
import { getUserListings } from '../../Services/api/apiCalls';


const DashboardPage = ({ userID }) => {
  const [displayedShoes, setDisplayedShoes] = useState([]);

  useEffect(() => {
      getUserListings(userID)
        .then(userListingData => setDisplayedShoes(userListingData.shoes));
  }, []);

  const updateDisplay = (shoeID) => {
      setDisplayedShoes(prevState => {
        const updatedDisplay = prevState.filter(shoeData => shoeData.id !== shoeID);
        return updatedDisplay;
      });
  };

    const shoeListings = (shoeData) => {
      return shoeData.map((shoe) => {
        return <DashShoeCard key={shoe.id} shoeData={shoe} updateDisplay={updateDisplay}/>
      });
    }

      return (
    <div className="dashboard_layout">
        <h1>Dashboard</h1>
        <p>User's ID: {userID}</p>
        <h3>All Shoes Listing Below</h3>
        <ul>
          {shoeListings(displayedShoes) || <h1>No Listings...</h1>}
        </ul>
    </div>
  );
}

export default DashboardPage;