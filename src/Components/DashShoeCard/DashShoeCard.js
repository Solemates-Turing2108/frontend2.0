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
      <div className="product-card_info">
        <h3>{shoeData.description}</h3>
        <p>This is a {shoeData.side}, {shoeData.brand}, {shoeData.style} shoe, size {shoeData.size}</p>
      </div>
        <button className="product-card_delete" onClick={() => deleteItem()}>Delete</button>
        {errorMessage}
    </li>
  )
}