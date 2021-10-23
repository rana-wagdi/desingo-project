
import { Link } from "react-router-dom";


const MainFooter =()=>{
    return(
        <div className="talk">
          <div>
            <h1>Let’s talk about your project</h1>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="touch-button">
          <Link to="/contact">
            <button className="button">GET IN TOUCH</button>
            </Link>
          </div>
        </div>
    )
}

export default MainFooter;