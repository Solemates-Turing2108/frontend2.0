import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logoImg from '../../Assets/images/Solemate.svg';

function Header() {
  return (
    <div className="header_layout">
      <Link to="/"><img src={logoImg}/></Link>
    </div>
  )
}

export default Header;