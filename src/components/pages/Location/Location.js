import React from "react";
import MainFooter from "../../../sharedComponent/mainFooter";


const Location = ()=> {

    return(
        <div className="location">
        <div className="location__items">
            <div className="location__item">
                <h1>
                    Canada
                </h1>
                <div className="country__contant">
                <div>
                    <h4>Designo Central Office</h4>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@desingo.co</p>
                </div>
                </div>
            </div>
            <div className="location__map">

        
            </div>
        </div>
     

     {/* Australia */}
     <div className="location__items__au">
           
            <div className="location__map__au">

        
            </div>
            <div className="location__item__au">
                <h1>
                    Australia
                </h1>
                <div className="country__contant__au">
                <div>
                    <h4>Designo AU Office</h4>
                    <p>19 Balonne Street</p>
                    <p>New South Wales 2443</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>P : (02) 67209092</p>
                    <p>M : contact@desingo.au</p>
                </div>
                </div>
            </div>
        </div>

    {/* unitedKingdom */}
        <div className="location__items__king">
            <div className="location__item__king">
                <h1>
                    United Kingdom
                </h1>
                <div className="country__contant__king">
                <div>
                    <h4>Designo UK Office</h4>
                    <p>13 Colorado Way</p>
                    <p>Rhyd-y-fro SA8 9GA</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>P : 07831151400</p>
                    <p>M : contact@desingo.uk</p>
                </div>
                </div>
            </div>
            <div className="location__map__king">

        
            </div>
        </div>
        <MainFooter />
        </div>
    )
}

export default Location;