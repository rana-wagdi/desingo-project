import React from 'react';
import web from "../../assets/Home/image-web-design-large.jpg";
import { IoIosArrowForward } from "react-icons/io";

const Main = () => {
    return (
      <section className="main">
        <div className="main-web">
          {/* <div className="img-bg">
            <img src={web} alt="web" />
          </div> */}
          <div className="over">
            <div className="web-design">
              <h1>WEB DESIGN</h1>
              <p>
                VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
              </p>
            </div>
          </div>
        </div>
        <div className="main-app">
          <h1>APP DESIGN</h1>
          <p>
            VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
          </p>
        </div>
        <div className="main-graphic">
          <h1>GRAPHIC DESIGN</h1>
          <p>
            VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
          </p>
        </div>
      </section>
    );
}
export default Main;