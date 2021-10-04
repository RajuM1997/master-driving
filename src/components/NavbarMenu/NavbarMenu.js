import React from "react";
import { Link } from "react-router-dom";
import "./NavbarMenu.css";

const NavbarMenu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="logo">
            <h2>Learn24H</h2>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" to="/home">
                <li className="nav-link active" aria-current="page">
                  Home
                </li>
              </Link>
              <Link className="nav-link active" to="/services">
                <li className="nav-link active">Servics</li>
              </Link>
              <Link to="/testimonial" className="nav-link active">
                <li className="nav-link active">Testimonial</li>
              </Link>
              <Link to="/about" className="nav-link active">
                <li className="nav-link active">About</li>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMenu;
