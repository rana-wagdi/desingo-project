
import MainFooter from "../../../sharedComponent/mainFooter";
import graphicData from "./graphicData";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

const GraphicDesign = () => {
    return (
        <div>
            <div className="web_design">
                <header className="web__header">
                    <h1>Graphic Design</h1>
                    <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
                </header>

                <div className="web_design__items">

                    {graphicData.map((user) => (
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
                        <div className="web_design__app-design__content__web">
                            <div className="web_design__app-design">
                                <Link to="/webdesign">
                                    <h1>WEB DESIGN</h1>
                                    <p>
                                        VIEW PROJECTS <IoIosArrowForward className="arrow-icon" />
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>






            <MainFooter />
        </div>
    )
}

export default GraphicDesign;