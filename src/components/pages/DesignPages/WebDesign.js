
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



                <div className="web_design__App__items">
                    <div className="web_design__main-app__item">
                        <div className="web_design__app-design__content">
                            <div className="web_design__app-design">
                                <Link to="/appdesign">
                                    <h1>APP DESIGN</h1>
                                    <p>
                                        VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="web_design__main-app__item">
                        <div className="web_design__graphic-design__content">
                            <div className="web_design__graphic-design">
                            <Link to="/graphicdesign">
                                <h1>GRAPHIC DESIGN</h1>
                                <p>
                                    VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
                                </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <MainFooter />
        </div>
    )
}

export default WebDesign;