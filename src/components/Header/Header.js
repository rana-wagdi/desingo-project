import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/Header/logo-dark.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai'



const Header = () => {


  const [open, setOpen] = useState(false);
  const showMenu = () => setOpen(!open); //to close when click

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
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="header-links">
        <li>
          <Link to="/ourcompany"> OUR COMPANY</Link>
        </li>
        <li>
          <Link to="/location"> LOCATION</Link>
        </li>
        <li>
          <Link to=""> CONTACT</Link>
        </li>
      </ul>

      <div className="header-burger" onClick={showMenu}>
        {open ? closeIcon : humburerIcon}
        {open && (
          <ul className="header-links-burger">
            <li>
              <Link to="/ourcompany"> OUR COMPANY</Link>
            </li>
            <li>
              <Link to="/location"> LOCATION</Link>
            </li>
            <li>
              <Link to=""> CONTACT</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
export default Header;