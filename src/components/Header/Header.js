import React from 'react';
import logo from '../../assets/Header/logo-dark.png';




const Header = () => {
    return (
      <header className='header'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>OUR COMPANY</li>
          <li>LOCATIONS</li>
          <li>CONTACT</li>
        </ul>
      </header>
    );
}
export default Header;