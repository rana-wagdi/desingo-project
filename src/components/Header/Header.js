import React from 'react';
import { Link } from "react-router-dom"

import logo from '../../assets/Header/logo-dark.png';




const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" height="30px" />
        </div>
        <ul className="header-links">
          <li>OUR COMPANY</li>
          <li>LOCATION</li>
          <li>CONTACT</li>
        </ul>

        <div className="header-burger">
          <ul className="">
            <li>OUR COMPANY</li>
            <li>LOCATION</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </header>
    );
}
export default Header;