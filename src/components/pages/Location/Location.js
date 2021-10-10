import React from "react";
import canda from '../../../assets/pages/location/image-map-canada.png'


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

            <div className="img-location">

            </div>
           
            
            </div>
        </div>
        </div>
    )
}

export default Location;