import { Link } from "react-router-dom";

import canda from "../assets/pages/ourcompany/illustration-canada.svg";
import australia from "../assets/pages/ourcompany/australia.svg";
import unitedKingdom from "../assets/pages/ourcompany/illustration-united-kingdom.svg";





const LocationShared =() =>{
    return(
        <div>
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

        </div>
    )
}

export default LocationShared;