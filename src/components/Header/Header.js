import React, {useState} from 'react';
// import { Link } from "react-router-dom"

import logo from '../../assets/Header/logo-dark.png';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineCloseCircle} from 'react-icons/ai'



const Header = () => {

  const [open, setOpen] = useState(false);
  const humburerIcon = 
    <AiOutlineMenu
      className="humburger"
      size="40px"
      onClick={() => setOpen(!open)}
    />
    const closeIcon = 
      <AiOutlineCloseCircle
        className="humburger"
        size="40px"
        onClick={() => setOpen(!open)}
      />
    
  
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
          {open ? closeIcon : humburerIcon}
          {open && 
            <ul className="header-links-burger">
              <li>OUR COMPANY</li>
              <li>LOCATION</li>
              <li>CONTACT</li>
            </ul>
          }
        </div>
      </header>
    );
}
export default Header;