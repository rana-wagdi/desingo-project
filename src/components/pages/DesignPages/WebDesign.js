
import MainFooter from "../../../sharedComponent/mainFooter";
import webData from "./webData";
import firstPhoto from '../../../assets/pages/webPages/webDesign/image-express.jpg'

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
                        <div className="web_design__item">
                            <div>
                                <img src={user.img} />
                            </div>

                            <div className="web_design__item__content">

                                <h2>{user.title}</h2>
                                <p>{user.text}</p>

                            </div>
                        </div>
                    ))}



                </div>

            </div>
            <MainFooter />
        </div>
    )
}

export default WebDesign;