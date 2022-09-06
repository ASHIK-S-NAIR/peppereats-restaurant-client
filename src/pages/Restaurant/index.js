import React from "react";
import { Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";

const index = () => {
  return (
    <div className="restaurant">
      <Home />
      <About />
      <Menu />
      <Testimonial />
      <Team />
      <div className="row">
      <Link to="/reservation mob-reserveBtn">
        {" "}
        <button type="button" className="btn cta-btn">
          RESERVE TABLE
        </button>
      </Link>
      </div>
    </div>
  );
};

export default index;
