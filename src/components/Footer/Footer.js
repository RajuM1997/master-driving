import React from "react";
import "./Footer.css";

// footer component here

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="our-categary">
              <ul>
                <h3>Our Categary Link</h3>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Testimonial</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="our-course">
              <ul>
                <h3>Our Service</h3>
                <li>Learn To Drive Slowly</li>
                <li>Courses For Adults</li>
                <li>Lessons For Teens</li>
                <li>Highway Driving Course</li>
                <li>For International Drivers</li>
                <li>Automatic Car Lessons</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact">
              <ul>
                <h3>Contact Us</h3>
                <li> 379 5th Ave New York, NYC 10018</li>
                <li> (+88) 96 716 6879</li>
                <li> (+1) 96 716 6879</li>
                <li> examplo@site.com</li>
                <li>www.example.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-text">
          <small> &copy; Copy Right 2021 @ Raju</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
