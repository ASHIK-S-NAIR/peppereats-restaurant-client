import React, { useState } from "react";
import logoIcon from "../../assets/brand/logo.png";
import { Link } from "react-router-dom";
import "./style.css";

window.addEventListener("scroll", function () {
  if (this.pageYOffset > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };
  return (
    //  header section start
    <header className="header">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="logo">
            <a href="/">
              <img src={logoIcon} alt="logo" />
            </a>
          </div>
          <div className="group-nav justify-content-between align-items-center">
            <Link to="/reservation">
              {" "}
              <button type="button" className="btn cta-btn">
                RESERVE TABLE
              </button>
            </Link>
            <button
              type="button"
              className={`nav-toggler ${active ? "active" : ""}`}
              onClick={() => toggleNav()}
            >
              <span></span>
            </button>
            <nav className={`nav ${active ? "open" : ""}`}>
              <ul>
                <li className="nav-item" onClick={() => toggleNav()}>
                  <a href="#home">home</a>
                </li>
                <li className="nav-item" onClick={() => toggleNav()}>
                  <a href="#about">about</a>
                </li>
                <li className="nav-item" onClick={() => toggleNav()}>
                  <a href="#our-menu">our menu</a>
                </li>
                <li className="nav-item" onClick={() => toggleNav()}>
                  <a href="#testimonials">testimonials</a>
                </li>
                <li className="nav-item" onClick={() => toggleNav()}>
                  <a href="#team">team</a>
                </li>
                <li className="nav-item" onClick={() => toggleNav()}>
                  <a href="#footer">contact us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    //  header section end
  );
};

export default Header;
