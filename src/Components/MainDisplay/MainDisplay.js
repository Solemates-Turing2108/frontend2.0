import React, { useEffect, useState } from "react";
import { getAllShoes } from "../../Services/api/apiCalls";
import FilterForm from "../FilterForm/FilterForm";
import ShoeCard from "../ShoeCard/ShoeCard";
import './MainDisplay.css';


export default function MainDisplay() {
  const [shoeData, setShoeData] = useState([]);
  
  useEffect(() => {
    updateShoeData();
  },[]);

  const updateShoeData = async (data) => {
    if (data) {
      setShoeData(data);
    } else {
      const { shoes } = await getAllShoes();
      setShoeData(shoes);
    }
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
    <div className="shoe-listings_layout">
      <h1>All Listings</h1>
      <FilterForm updateShoeData={updateShoeData}/>
    { createShoeCards() || <p>No listings to display...</p>}
    </div>
  )
}