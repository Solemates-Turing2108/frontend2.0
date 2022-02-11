import React from "react";

export default function ShoeCard({ shoeData }) {
  return (
    <li id={shoeData.id}>
      <h2>{shoeData.description}</h2>
    </li>
  )
}