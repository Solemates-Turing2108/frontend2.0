import React from "react";
import './ShoeCard.css';

export default function ShoeCard({ shoeData }) {
  const allowCORSImg = () => {
    const url = shoeData.photo_url;
    const image = new Image();
    image.src = url;

    const corsImage = new Image();
    corsImage.crossOrigin = "Anonymous";
    corsImage.src = url;
    console.log(corsImage)
    return corsImage.src;
  }

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