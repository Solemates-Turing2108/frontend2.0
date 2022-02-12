import React from "react";

export default function ListingForm() {
  return (
    <form>
      <label>Photo URL</label>
      <input type="text"/>
      <label>Side</label>
      <select>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <label>Size</label>
      <input type="number"/>
      <label>Style</label>
      <select>
        <option value="sneakers">Sneaker</option>
        <option value="boots">Boot</option>
        <option value="heels">Heel</option>
        <option value="dress">Dress</option>
      </select>
    </form>
  )
}