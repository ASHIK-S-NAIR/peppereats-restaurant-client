import React from "react";
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
    </div>
  );
};

export default index;
