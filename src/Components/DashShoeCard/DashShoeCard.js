import React from "react";
import './DashShoeCard.css';
import { Link } from 'react-router-dom';


export default function ShoeCard({ shoeData }) {

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
        <button>Delete</button>
    </li>
  )
}