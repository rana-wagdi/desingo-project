import React from "react";
import LocationShared from "../../../sharedComponent/LocationShared";


const Contact = () => {
   
    return (
        <div className="contact">
        <div className="contact__content">
        <div className ="contact__content__contactUs">
            <h1>Contact Us</h1>
            <p>Ready to take the next level? Let's talk about your project or idea and find out how we can help youe business grow. If you are looking for unique digital experiences that's relatable to your user, drop us a line</p>
        </div>
        <div className="contact__content__inputs">
            <label id="contact-form">
                <input type="text" placeholder="Name"  required="required" pattern="[A-Za-z]{1,20}"/><br />
                <input type="email" placeholder="Email Adress" /><br />
                <input type="text" placeholder="Phone" /><br />
                <textarea placeholder="Your Message" name="" rows="4" cols="50"></textarea><br />
                <button type="submit" form="contact-form">Submit</button>
            </label>
        </div>
        </div>
      <div className="deal">
            <LocationShared />
        </div>
        </div>

      
    )
}

export default Contact;