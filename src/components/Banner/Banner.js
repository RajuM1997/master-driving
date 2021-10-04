import React from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      {/* display the navber */}
      <NavbarMenu />
      <div className="container">
        <div className="row banner-main">
          <div className="col-md-12">
            <div className="pb-3">
              <i>
                <h1>Join Our Online Or Offline Course</h1>
              </i>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat, debitis.
              </small>
            </div>
            {/* common button */}
            <button className="common-btn">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
