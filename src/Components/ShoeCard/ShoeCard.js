import React from "react";
import './ShoeCard.css';

export default function ShoeCard({ shoeData }) {
  return (
    <li className="product-card_container" id={shoeData.id}>
      <img className="product-card_img" src={shoeData.photo_url} alt={shoeData.description}/>
      <p>{shoeData.description}</p>
      <p>{shoeData.brand}</p>
      <p>{shoeData.size}</p>
      <p>{shoeData.side}</p>
      <p>{shoeData.style}</p>
    </li>
  )
}