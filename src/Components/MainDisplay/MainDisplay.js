import React, { useEffect, useState } from "react";
import { getAllShoes } from "../../Services/api/apiCalls";

export default function MainDisplay() {
  const [shoeData, setShoeData] = useState([]);
  
  useEffect(() => {
    updateShoeData();
  },[]);

  const updateShoeData = async () => {
    const { shoes } = await getAllShoes();
    setShoeData(shoes);
  }

  let shoeListings = (<p>No listings to display...</p>);
  useEffect(() => {
    updateShoeData();
  },[]);

  const updateShoeData = async () => {
    const { shoes } = await getAllShoes();
    setShoeData(shoes);
  }

  if (shoeData.length) {
    shoeListings = shoeData.map(shoe => {
      
    })
  }

  return (
    <>
    {shoeListings}
    </>
  )
}