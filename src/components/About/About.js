import React from "react";
import Footer from "../Footer/Footer";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import "./About.css";

// about component

const About = () => {
  return (
    <div className="main-about">
      <NavbarMenu />
      <div className="about">
        <div className="about-container">
          <div className="container">
            <div className="about-left-text">
              <div className="about-title">
                <h3>About US</h3>
                <div className="section-title-underline"></div>
              </div>
              <p>
                Motor vehicle crashes remain the No. 1 cause of death for teens.
                Through its multidisciplinary Teen Driving Safety Research
                program, the Center for Injury Research and Prevention is
                working to reduce the frequency and severity of teen driver
                crashes, injuries, and fatalities. Much of our teen driver
                safety research corresponds to at least one of the following
                three broad categories: teen drivers' skill acquisition and
                training compliance with and enforcement of Graduated Driver
                Licensing (GDL) provisions improving teen driving behaviors This
                website was re-built and launched in 2018. Its original version
                was created in 2010 by the Teen Driving Safety Research team at
                the Center for Injury Research and Prevention (CIRP) at
                Children’s Hospital of Philadelphia. Its purpose remains the
                same: to provide parents, teens, educators, and policymakers
                with the latest information and tools to help prevent teen
                driver crashes.
              </p>
              <button className="common-btn">See More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
