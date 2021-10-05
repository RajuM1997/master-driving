import React, { useEffect, useState } from "react";
import ServiceHome from "../ServiceHome/ServiceHome";
import "./ServicesHome.css";

// display 4 services items in the home section and send data child component service home component

const ServicesHome = () => {
  const [servicesHome, setServicesHome] = useState([]);
  useEffect(() => {
    fetch("./servicedb.json")
      .then((res) => res.json())
      .then((data) => setServicesHome(data));
  }, []);
  return (
    <div className="servicesHome">
      <h1 className="text-center py-4">Our Services</h1>
      <div className="row g-3 ">
        {/* data send to services home component */}
        {servicesHome.map((serviceHome) => (
          <ServiceHome
            key={serviceHome.id}
            serviceHome={serviceHome}
          ></ServiceHome>
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;
