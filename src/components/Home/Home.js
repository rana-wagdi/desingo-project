import React from 'react';
import { Link } from 'react-router-dom';

import mobile from '../../assets/Home/image-hero-phone.png';


const Home = () => {
    return (
      <section className="home">
        <div className="home-title ">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link to="/appdesign">
          <button className="button">LEARN MORE</button>
          </Link>
        </div>
        <div className="img-mobile">
          <img src={mobile} alt="mobile" />
        </div>
      </section>
    );
}

export default Home;