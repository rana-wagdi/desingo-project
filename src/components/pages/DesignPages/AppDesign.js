import MainFooter from "../../../sharedComponent/mainFooter";
import appData from "./appData";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

const AppDesign = () => {
    return (
        <div>
            <div className="web_design">
                <header className="web__header">
                    <h1>App Design</h1>
                    <p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
                </header>

                <div className="web_design__items">

                    {appData.map((user) => (
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

export default AppDesign;