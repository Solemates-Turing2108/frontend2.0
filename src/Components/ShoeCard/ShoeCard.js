import React from "react";
import './ShoeCard.css';
import { Link } from 'react-router-dom';


export default function ShoeCard({ shoeData }) {

  return (
    
    <li className="product-card_container" id={shoeData.id}>
      <Link to={`/shoes/:${shoeData.id}`}>
      <img className="product-card_img" src={shoeData.photo_url} alt={shoeData.description}/>
      </Link>
      <div className="product-card_info">
        <h3>{shoeData.description}</h3>
        <p>This is a {shoeData.side}, {shoeData.brand}, {shoeData.style} shoe, size {shoeData.size}</p>
      </div>
    </li>
  )
}