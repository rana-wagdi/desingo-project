import React from 'react';
import logo from '../../assets/Header/logo-dark.png';




const Header = () => {
    return (
      <header className='header'>
        <div className='logo'>
          <img src={logo} alt="logo" height='35px'  />
        </div>
        <ul className='navbar'>
          <li>OUR COMPANY</li>
          <li>LOCATIONS</li>
          <li>CONTACT</li>
        </ul>
      </header>
    );
}
export default Header;