import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Service from "../Service/Service";
import "./Services.css";

// display 7 services items in the home section and send data child component service service component

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("./cardb.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="services">
      <NavbarMenu />
      <div className="container pt-2">
        <div className="row g-4">
          {/* data send service component */}
          {services.map((service) => (
            <div className="col-md-4">
              <Service key={service.id} service={service}></Service>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
