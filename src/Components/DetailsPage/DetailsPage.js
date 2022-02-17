import React, { useState, useEffect } from 'react';
import './DetailsPage.css';
import { useLocation } from 'react-router-dom';


const DetailPage = () => {

    const [shoeData, setShoeData ] = useState([]);

    const shoeID = useLocation().pathname.split(':')[1]

    useEffect(() => {
        const fetchData = async (api) => {
          const response = await fetch(api)
          const responseJson = await response.json()
          setShoeData(responseJson)
        } 
        fetchData(`https://turingsolemates.herokuapp.com/api/v1/shoes/${shoeID}`)
      }, [])

      return (
    <div className="shoe-details_layout">
        <img className="shoe-details_img" src={shoeData.photo_url} alt={shoeData.description}/>
        <h1>{shoeData.description} </h1>
        <article>
          <p>Size: {shoeData.size}'' US</p>
          <p>Side: {shoeData.side}</p>
          <p>Brand: {shoeData.brand}</p>
          <p>Style: {shoeData.style}</p>
        </article>
    </div>
  );
}

export default DetailPage;