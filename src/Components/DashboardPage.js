import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import { useLocation } from 'react-router-dom';


const DashboardPage = () => {

    const [userData, setUserData ] = useState([]);

    // const userID = useLocation().pathname
    // console.log(userID)

      return (
    <>
        <h1>SoleMate DashboardPage</h1>
        {/* <p>{userData}</p> */}
    </>
  );
}

export default DashboardPage;