import React from 'react';
import logo from "../../assets/Home/logo-light.png";

const Footer = () => {
    return (
      <div>
        <div className="talk">
          <div>
            <h1>Let’s talk about your project</h1>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="touch-button">
            <button className="button">GET IN TOUCH</button>
          </div>
        </div>
        <footer className="footer">
          <div className="nav-footer">
            <div className="logo-footer">
              <img src={logo} alt="logo" />
            </div>
            <hr className="line-logo" />
            <ul className="link-footer">
              <li>OUR COMPANY</li>
              <li>LOCATION</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <hr className="line" />
        </footer>
      </div>
    );
}
export default Footer;