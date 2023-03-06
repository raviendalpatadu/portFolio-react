import React from "react";
import './index.css';


function Navbar() {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  return (
    <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item pl-6" href="#"> Ravien Dalpatadu </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-end mr-4-desktop">
        <div id="navbarBasicExample" className="navbar-menu bgcolor-brand">
          <div className="navbar-start pr-2 nav-white-shadow">
            <a className="navbar-item mx-3" href="#about"> About </a>
            <a className="navbar-item mx-3" href="#projects"> Projects </a>
            <a className="navbar-item mx-3" href="#Education"> Education </a>
            <a className="navbar-item mx-3" href="#contact"> Contact Me </a>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
