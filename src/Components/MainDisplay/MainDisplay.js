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

  return (
    <h1>Dog Blog</h1>
  )
}