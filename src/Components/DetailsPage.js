import React, { useState, useEffect } from 'react';
import './DetailsPage.css';
import { useLocation } from 'react-router-dom';


const DetailPage = () => {

    const [shoeData, setShoeData ] = useState([]);

    // const shoeID = useLocation().pathname
    // console.log(shoeID)

      return (
    <>
        <h1>SoleMate DetailPage</h1>
        {/* <p>{shoeData}</p> */}
    </>
  );
}

export default DetailPage;