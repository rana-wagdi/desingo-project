import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/Home/logo-light.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


const Footer = (props) => {



    return (
      <div>
        
        <footer className="footer">
          <div className="nav-footer">
            <div className="logo-footer">
              <img src={logo} alt="logo" />
            </div>
            <hr className="line-logo" />
            <ul className="link-footer">
              <li>
                <Link  tabIndex="0" to="/ourcompany"> OUR COMPANY</Link>
              </li>
              <li>
                <Link to="/location"> LOCATION</Link>
              </li>
              <li>
                <Link to="/contact"> CONTACT</Link>
              </li>
            </ul>
          </div>
          <hr className="line" />

          <div className="contact-section">
            <div>
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="contactUs">
              <p>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
            <div className="icon">
              <span>
                <a href="https://www.facebook.com/">
                  <AiFillFacebook className="social-icon" size="30px" />
                </a>
              </span>
              <span>
                <a href="https://www.youtube.com/">
                  <AiFillYoutube className="social-icon" size="30px" />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/?lang=en">
                  <AiOutlineTwitter className="social-icon" size="30px" />
                </a>
              </span>
              <span>
                <a href="https://www.pinterest.com/">
                  <FaPinterest className="social-icon" size="30px" />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/">
                  <FiInstagram className="social-icon" size="30px" />
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
}
export default Footer;