import React from 'react';
import about from "../../assets/pages/ourcompany/image-about-hero.jpg";

const OurCompany = () => {
    return (
        <div>
            <div className="about">
                <div className="about-us">
                    <h1>About Us</h1>
                    <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits aloke to craft desingo that make real impact. we're always looking forward to creating brands, products, and digitl experiences that connect with our client's audiences.</p>
                </div>
                <div className="about-img">
                    <img src={about} alt="aboutHer" />
                </div>
            </div>
        </div>
    )
}

export default OurCompany;