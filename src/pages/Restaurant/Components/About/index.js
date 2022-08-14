import React from 'react';
import AboutImage from "../../../../assets/images/about-img.jpg";
import "./style.css";

const About = () => {
  return (
    <section className="about-section sec-padding" id="about">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2 data-title="our story" data-aos="fade-up">about us</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-text" data-aos="fade-right">
                    <h3>Welcome To Pepper Eats Restaurent</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, quasi repudiandae! Praesentium dolorem autem hic! Impedit ipsam culpa ab quis dolore et voluptatem sapiente expedita! Asperiores temporibus commodi, atque optio enim qui deleniti quo molestias culpa? Nam placeat laborum eum!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis corrupti dolore beatae consequuntur saepe aut assumenda vel? Repudiandae ipsum nulla totam architecto in dolorem minus blanditiis necessitatibus vitae quis tempora consequatur, inventore sapiente a voluptatibus vero error eum nisi omnis!</p>
                    <a href="#our-menu" className="btn btn-default">check our menu</a>
                </div>
                <div className="about-img" data-aos="fade-left">
                    <div className="img-box">
                        <h3>20+ years experience</h3>
                        <img src={AboutImage} alt="about-img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About