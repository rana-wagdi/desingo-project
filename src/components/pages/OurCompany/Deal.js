import React from 'react';
import canda from "../../../assets/pages/ourcompany/illustration-canada.svg";
import australia from "../../../assets/pages/ourcompany/australia.svg";
import unitedKingdom from "../../../assets/pages/ourcompany/illustration-united-kingdom.svg";
//"../../../assets/pages/ourcompany/illustration-australia.svg";

const Deal = () => {
    return (
      <div className="deal">
        <div className="deal-location">
          <div>
            <img src={canda} alt="canda" />
            <h2>CANADA</h2>
          </div>
          <div>
            <img src={australia} alt="australia" />
            <h2>AUSTRALIA</h2>
          </div>
          <div>
            <img src={unitedKingdom} alt="unitedKingdom" />
            <h2>UNITED KINGDOM</h2>
          </div>
        </div>
      </div>
    );
}

export default Deal;