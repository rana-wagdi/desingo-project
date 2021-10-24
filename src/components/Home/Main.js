import React from 'react';
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";


const Main = () => {
    return (
      <section className="main">
        <div className="main-web">
          <div className="web-design">
          <Link to="/webdesign">
            <h1>WEB DESIGN</h1>
            <p>
              VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
            </p>
            </Link>
          </div>
        </div>
        <div className="main-app">
          <div className="app-design">
          <Link to="/appdesign">
            <h1>APP DESIGN</h1>
            <p>
              VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
            </p>
            </Link>
          </div>
        </div>
        <div className="main-graphic">
          <div className="graphic-design">
          <Link to="/graphicdesign">
            <h1>GRAPHIC DESIGN</h1>
            <p>
              VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
            </p>
            </Link>
          </div>
        </div>
      </section>
    );
}
export default Main;