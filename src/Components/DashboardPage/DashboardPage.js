import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import { useLocation } from 'react-router-dom';


const DashboardPage = () => {

    const [userData, setUserData ] = useState([]);

    // const userID = useLocation().pathname
    // console.log(userID)

    useEffect(() => {
        const fetchData = async (api) => {
          const response = await fetch(api)
          const responseJson = await response.json()
          setUserData(responseJson)
        } 
        // fetchData(`https://turingsolemates.herokuapp.com/api/v1/users/{userID}/shoes`)
      }, [])

      return (
    <>
        <h1>SoleMate DashboardPage</h1>
        {/* <p>{userData}</p> */}
    </>
  );
}

export default DashboardPage;