import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import { useLocation } from 'react-router-dom';
import DashShoeCard from '../DashShoeCard/DashShoeCard';


const DashboardPage = () => {

    const [userData, setUserData ] = useState([]);

    const userID = useLocation().pathname.split('/')[2]
    // console.log(userID)
    // console.log('data', userData)

    const shoesListings = userData.map((shoe) => {
      return <DashShoeCard key={shoe.id} shoeData={shoe}/>
    });

    useEffect(() => {
        const fetchData = async (api) => {
          const response = await fetch(api)
          const responseJson = await response.json()
          setUserData(responseJson.shoes)
        } 
        fetchData(`https://turingsolemates.herokuapp.com/api/v1/users/${userID}/shoes`)
      },)

      return (
    <>
        <h1>Dashboard</h1>
        <p>User's ID: {userID}</p>
        <h3>All Shoes Listing Below</h3>'
        <ul>
          {shoesListings}
        </ul>
    </>
  );
}

export default DashboardPage;