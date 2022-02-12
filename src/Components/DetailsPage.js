import React, { useState, useEffect } from 'react';
import './DetailsPage.css';
import { useLocation } from 'react-router-dom';


const DetailPage = () => {

    const [shoeData, setShoeData ] = useState([]);

    // const shoeID = useLocation().pathname
    // console.log(shoeID)

    useEffect(() => {
        const fetchData = async (api) => {
          const response = await fetch(api)
          const responseJson = await response.json()
          setShoeData(responseJson)
        } 
        // fetchData(`https://turingsolemates.herokuapp.com/api/v1/shoes/${shoeID}`)
      }, [])

      return (
    <>
        <h1>SoleMate DetailPage</h1>
        {/* <p>{shoeData}</p> */}
    </>
  );
}

export default DetailPage;