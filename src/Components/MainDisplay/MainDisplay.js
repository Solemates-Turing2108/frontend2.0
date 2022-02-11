import React, { useEffect, useState } from "react";
import { getAllShoes } from "../../Services/api/apiCalls";
import ShoeCard from "../ShoeCard/ShoeCard";
import './MainDisplay.css';

export default function MainDisplay() {
  const [shoeData, setShoeData] = useState([]);
  
  useEffect(() => {
    updateShoeData();
  },[]);

  const updateShoeData = async () => {
    const { shoes } = await getAllShoes();
    setShoeData(shoes);
  }

  useEffect(() => {
    updateShoeData();
  },[]);

  const updateShoeData = async () => {
    const { shoes } = await getAllShoes();
    setShoeData(shoes);
  }

  const createShoeCards = () => {
    if (shoeData.length) {
      const shoeCards = shoeData.map(data => {
        return <ShoeCard key={data.id} shoeData={data}/>
      });

      return (
        <ul className="shoe-listings">
          {shoeCards}
        </ul>
      );
    }
  }

  return (
    <>
    { createShoeCards() || <p>No listings to display...</p>}
    </>
  )
}