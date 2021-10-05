import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

//display the 7 items
const Service = (props) => {
  const { title, image, price, duration, id } = props.service;
  return (
    <div className="col-md-4 service">
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
            <Link to={`service/${id}`}>
              <button className="details-btn">Details</button>
            </Link>
            <button className="join-btn">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
