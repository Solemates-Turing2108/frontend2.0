import React, { useState, useEffect } from 'react';
import './DetailsPage.css';
import { useLocation } from 'react-router-dom';


const DetailPage = () => {

    const [shoeData, setShoeData ] = useState([]);

    const shoeID = useLocation().pathname.split(':')[1]
    // console.log('shoeid', shoeID)
    // console.log(shoeData)

    useEffect(() => {
        const fetchData = async (api) => {
          const response = await fetch(api)
          const responseJson = await response.json()
          setShoeData(responseJson)
        } 
        fetchData(`https://turingsolemates.herokuapp.com/api/v1/shoes/${shoeID}`)
      }, [])

      return (
    <>
        <h1>{shoeData.brand} {shoeData.side} Shoe </h1>
        <img src={shoeData.photo_url} alt={shoeData.description}/>
        <article>
          <p>Description: {shoeData.description}</p>
          <p>Side: {shoeData.side}</p>
          <p>Brand: {shoeData.brand}</p>
          <p>Size: {shoeData.size}</p>
          <p>Style: {shoeData.style}</p>
        </article>
    </>
  );
}

export default DetailPage;