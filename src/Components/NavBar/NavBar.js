import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import houseImg from '../../Assets/images/noun-house-1711906.svg';
import addButton from '../../Assets/images/noun-plus-2048209.svg';
import userImg from '../../Assets/images/noun-user-4602163.svg';

function NavBar() {
  return (
    <ul className="navbar_background navbar_layout">
      <li className="navbar_button">
        <NavLink to="/"> <img className="navbar_img" src={houseImg} alt="home"/> </NavLink>
      </li>
      <li className="navbar_button">
        <NavLink to="/add-listing"> <img className="navbar_img" src={addButton} alt="home"/> </NavLink>
      </li>
      <li className="navbar_button">
        <NavLink to="/dashboard"> <img className="navbar_img" src={userImg} alt="home"/> </NavLink>
      </li>
    </ul>
  )
}

export default NavBar;