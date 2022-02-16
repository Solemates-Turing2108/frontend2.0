import userEvent from "@testing-library/user-event";
import React, { useRef } from "react";
import { filterListings } from "../../Services/api/apiCalls";
import './FilterForm.css';

function FilterForm({ updateShoeData }) {
  const styleInputRef = useRef();
  const sizeInputRef = useRef();
  const sideRef = useRef();

  const encapsulateFilterInputs = () => {
    return {
      side: sideRef.current.value,
      style: styleInputRef.current.value,
      size: parseInt(sizeInputRef.current.value)
    }
  }

  const filterMainDisplay = (event) => {
    event.preventDefault();
    filterListings(encapsulateFilterInputs())
      .then(response => console.log(response));
  }

  return (
    <div>
      <p>Filter</p>
      <form>
        <input ref={styleInputRef} type="text" placeholder="Style" />
        <input ref={sizeInputRef} type="number" placeholder="Size" />
        <div>
          <label>Side:</label>
          <select ref={sideRef}>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
        <button onClick={filterMainDisplay}>Filter</button>
      </form>
    </div>
  )
}

export default FilterForm;