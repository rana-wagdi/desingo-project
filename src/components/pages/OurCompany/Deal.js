import React from 'react';
import { Link } from "react-router-dom";
import canda from "../../../assets/pages/ourcompany/illustration-canada.svg";
import australia from "../../../assets/pages/ourcompany/australia.svg";
import unitedKingdom from "../../../assets/pages/ourcompany/illustration-united-kingdom.svg";


const Deal = () => {
    return (
      <div className="deal">
        <div className="deal-location">
          <div className="deal-country">
            <img src={canda} alt="canda" />
            <h2>CANADA</h2>
            <Link to="/location">
            <button>SEE LOCATION</button>
            </Link>
          </div>
          <div className="deal-country">
            <img src={australia} alt="australia" />
            <h2>AUSTRALIA</h2>
            <Link to="/location">
            <button>SEE LOCATION</button>
            </Link>
          </div>
          <div className="deal-country">
            <img src={unitedKingdom} alt="unitedKingdom" />
            <h2>UNITED KINGDOM</h2>
            <Link to="/location">
            <button>SEE LOCATION</button>
            </Link>
          </div>
        </div>

        <section className="deal-section">
          <div className="deal-text">
            <h1>The real deal</h1>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p  className="deal__text__pragraph">
            We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
            </p>
          </div>
          <div className="deal-img"></div>
        </section>
      </div>
    );
}

export default Deal;