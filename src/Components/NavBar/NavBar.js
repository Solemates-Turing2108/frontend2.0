import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import homeBtn from '../../Assets/images/Nav Button Home.svg';
import dashboardBtn from '../../Assets/images/Nav Button Dashboard.svg'
import addListingBtn from '../../Assets/images/Nav Button Add Listing.svg';

function NavBar() {
  return (
    <ul className="navbar_background navbar_layout">
      <li className="navbar_button">
        <NavLink to="/"> <img className="navbar_img" src={homeBtn} alt="home"/> </NavLink>
      </li>
      <li className="navbar_button">
        <NavLink to="/add-listing"> <img className="navbar_img" src={addListingBtn} alt="home"/> </NavLink>
      </li>
      <li className="navbar_button">
        <NavLink to="/dashboard"> <img className="navbar_img" src={dashboardBtn} alt="home"/> </NavLink>
      </li>
    </ul>
  )
}

export default NavBar;