import React, { useState, useEffect } from 'react';
import './DetailsPage.css';
import { useLocation } from 'react-router-dom';


const DetailPage = () => {

    const [shoeData, setShoeData ] = useState([]);
    const [sellerData, setSellerData] = useState([]);
    const [showData, setShowData] = useState(false);

    const shoeID = useLocation().pathname.split(':')[1]

    useEffect(() => {
        const fetchData = async (api) => {
          const response = await fetch(api)
          const responseJson = await response.json()
          setShoeData(responseJson)
        } 
        fetchData(`https://turingsolemates.herokuapp.com/api/v1/shoes/${shoeID}`)
      }, [])

      const fetchEmail = async (api) => {
        const response = await fetch(api)
        const responseJson = await response.json()
        setSellerData(responseJson)
      } 

      const handleClick = (sellerID) => {
      if (sellerData.length === 0){
       setShowData(true)
        fetchEmail(`https://turingsolemates.herokuapp.com/api/v1/shoes/${shoeData.user_id}/user `)
      } else {
        setShowData(false)
        setSellerData([])

      }
      } 

      return (
    <div className="shoe-details_layout">
        <img className="shoe-details_img" src={shoeData.photo_url} alt={shoeData.description}/>
        <h1>{shoeData.description} </h1>
        <article>
          <p>Size: {shoeData.size}'' US</p>
          <p>Side: {shoeData.side}</p>
          <p>Brand: {shoeData.brand}</p>
          <p>Style: {shoeData.style}</p>
          <button onClick={()=>handleClick(shoeData.user_id)}>Contact Seller</button>
          {showData===true ? <p>{sellerData.user_email}</p> : <></>}
        </article>
    </div>
  );
}

export default DetailPage;