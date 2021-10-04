import React from "react";
import "./ServiceHome.css";

// display 4 services items

const ServiceHome = (props) => {
  const { image, title, duration, price } = props.serviceHome;
  return (
    <div className="col-md-3">
      <div className="card-group">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <small>Coruse Duration: {duration}</small>
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

export default ServiceHome;
