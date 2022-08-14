import React from "react";
import "./style.css";

const Home = () => {
  return (
    // home section starts
    <section className="home-section" id="home">
      <div className="home-bg"></div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div
            className="home-text"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>PepperEats Restaurant</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur r. Modi quam aspernatur
              laboriosam, ipsa facilis temporibus quidem dolorum unde.
            </p>
            <a href="#our-menu" className="btn btn-default">
              our menu
            </a>
          </div>
        </div>
      </div>
    </section>
    // home section starts
  );
};

export default Home;
