import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";
import "./Testimonial.css";

const Testimonial = () => {
  const [students, setStudents] = useState([]);

  // testimonial data load here

  useEffect(() => {
    fetch("./testimonialdb.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="testimonial">
      <NavbarMenu />
      <h1 className="py-5">What Our Students Say About Us</h1>
      <div className="container">
        <div className="row g-3">
          {students.map((student) => (
            // data send single testimonial component
            <SingleTestimonial
              key={student.id}
              student={student}
            ></SingleTestimonial>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonial;
