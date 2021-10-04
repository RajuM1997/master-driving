import React from "react";
import "./Service.css";

//display the 7 items
const Service = (props) => {
  const { title, image, price, duration } = props.service;
  return (
    <div className="service">
      <div className="card-group">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <small>Course Duration: {duration}</small>
            </p>
            <p className="card-text">Price: ${price}</p>
          </div>
          <div className="card-footer">
            <button className="details-btn">Details</button>
            <button className="join-btn">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
