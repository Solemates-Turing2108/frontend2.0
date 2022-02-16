import React, { useRef } from "react";
import { postNewListing } from "../../Services/api/apiCalls";

export default function ListingForm({ userID }) {
  const photoURLRef = useRef();
  const sideOptionRef = useRef();
  const sizeInputRef = useRef();
  const styleOptionRef = useRef();
  const brandInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler =  (event) => {
    event.preventDefault();
    postNewListing(encapsulateUserInputs())
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  const encapsulateUserInputs = () => {
    return {
      brand: brandInputRef.current.value,
      description: descriptionInputRef.current.value,
      photo_url: photoURLRef.current.value,
      side: sideOptionRef.current.value,
      size: parseInt(sizeInputRef.current.value),
      style: styleOptionRef.current.value,
      user_id: userID
    };
  }

  return (

    <form onSubmit={submitHandler}>
      <h1>Add Listing</h1>
      <label>Brand</label>
      <input ref={brandInputRef} type="text" />
      <label>Photo URL</label>
      <input ref={photoURLRef} type="text"/>
      <label>Description</label>
      <input ref={descriptionInputRef}/>
      <label>Side</label>
      <select ref={sideOptionRef}>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <label>Size</label>
      <input ref={sizeInputRef} type="number" />
      <label>Style</label>
      <select ref={styleOptionRef}>
        <option value="sneakers">Sneaker</option>
        <option value="boots">Boot</option>
        <option value="heels">Heel</option>
        <option value="dress">Dress</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}