import React from "react";

export default function ShoeCard({ shoeData }) {
  return (
    <li id={shoeData.id}>
      <img src={shoeData.url} alt={shoeData.description}/>
      <h2>{shoeData.description}</h2>
      <p>{shoeData.brand}</p>
      <p>{shoeData.size}</p>
      <p>{shoeData.side}</p>
      <p>{shoeData.style}</p>
    </li>
  )
}