import React from 'react';
import logoIcon from "../assets/brand/logo.png";

const Header = () => {
  return (
    //  header section start
        <header className="header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="logo">
                        <a href="/"><img src={logoIcon} alt="logo" /></a>
                    </div>
                    <button type="button" className="nav-toggler">
                        <span></span>
                    </button>
                    <nav className="nav">
                        <ul>
                            <li className="nav-item"><a href="#home">home</a></li>
                            <li className="nav-item"><a href="#about">about</a></li>
                            <li className="nav-item"><a href="#our-menu">our menu</a></li>
                            <li className="nav-item"><a href="#testimonials">testimonials</a></li>
                            <li className="nav-item"><a href="#team">team</a></li>
                            <li className="nav-item"><a href="#footer">contact us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    //  header section end

  )
}

export default Header