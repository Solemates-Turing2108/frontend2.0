import React from "react";
import './DashShoeCard.css';
import { Link } from 'react-router-dom';
import { deleteListing } from "../../Services/api/apiCalls";


export default function ShoeCard({ shoeData, updateDisplay }) {
let errorMessage = '';

  const checkResponseCode = (statusCode) => {
    if (statusCode === 200) {
      updateDisplay(shoeData.id);
      errorMessage = '';
    } else {
      errorMessage = (<p>There was an error please try again</p>)
    }
  }

  const deleteItem = () => {
    deleteListing(shoeData.id)
      .then(checkResponseCode)
      .catch(error => console.log(error));
  }

  return (
    <li className="product-card_container" id={shoeData.id}>
      <Link to={`/shoes/:${shoeData.id}`}>
      <img className="product-card_img" src={shoeData.photo_url} alt={shoeData.description}/>
      </Link>
        <p>{shoeData.description}</p>
        <p>{shoeData.brand}</p>
        <p>{shoeData.size}</p>
        <p>{shoeData.side}</p>
        <p>{shoeData.style}</p>
        <button onClick={() => deleteItem()}>Delete</button>
        {errorMessage}
    </li>
  )
}