import React from "react";

export default function ShoeCard({ shoeData }) {
  return (
    <li key={shoeData.id}>
      <h2>{shoeData.description}</h2>
    </li>
  )
}