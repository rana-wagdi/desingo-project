
import MainFooter from "../../../sharedComponent/mainFooter";
import webData from "./webData";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

const WebDesign = () => {
    return (
        <div>
            <div className="web_design">
                <header className="web__header">
                    <h1>Web Design</h1>
                    <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
                </header>
                <div className="web_design__items">

                    {webData.map((user) => (
                        <div key={user.id} className="web_design__item">
                            <div>
                                <img src={user.img} alt="" />
                            </div>
                            <div className="web_design__item__content">

                                <h2>{user.title}</h2>
                                <p>{user.text}</p>
                            </div>
                        </div>
                    ))}
                    </div>
           <div className="main-app">
          <div className="app-design">
          <Link to="/">
            <h1>APP DESIGN</h1>
            <p>
              VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
            </p>
            </Link>
          </div>
        </div>
        <div className="main-graphic">
          <div className="graphic-design">
            <h1>GRAPHIC DESIGN</h1>
            <p>
              VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
            </p>
          </div>
        </div>

                
                

            </div>
            <MainFooter />
        </div>
    )
}

export default WebDesign;