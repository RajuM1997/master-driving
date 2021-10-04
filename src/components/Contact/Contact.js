import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="py-5">
      <div className="container contact-form">
        <div className=" w-50 mx-auto">
          <h1>Get in tuch</h1>
          <div className="mb-3">
            <div for="exampleInputEmail1" className="form-label">
              Email address
            </div>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div for="exampleInputEmail1" className="form-label">
              Phon
            </div>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <div for="exampleInputPassword1" className="form-label">
              Password
            </div>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <div for="exampleFormControlTextarea1" className="form-label">
              Subject
            </div>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="common-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
