import React from "react";

const SingleTestimonial = (props) => {
  const { name, comment, image } = props.student;
  return (
    // display the UI single testimonial data

    <div className="col-md-4">
      <div className="card h-100">
        <img src={image} className="d-block" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{comment}</p>
          {/* display the ratting */}
          <div className="icon">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
