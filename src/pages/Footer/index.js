import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <section className="footer" id="footer">
        <div className="container">
            <div className="row">
                <div className="footer-item" data-aos="fade-up"> 
                    <h3>our location</h3>
                    <p>xyz Street, Sector-12, <br /> New Delhi - 000 ****</p>
                </div>
                <div className="footer-item" data-aos="fade-up">
                    <h3>opening hours</h3>
                    <p>Monday to Sunday <br /> 9:00AM - 10:00 PM</p>
                </div>
                <div className="footer-item" data-aos="fade-up">
                    <h3>contact us</h3>
                    <p>91 9654 293 ***</p>
                    <p>info@gmail.com</p>
                    <div className="social-links">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="copyright">
                    Designed and Developed by Ashik Sudhakaran &copy; 2021
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer