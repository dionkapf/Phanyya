import React from "react";
import logo from "../assets/logo.white.svg";
import "./Header.css";
import "./hamburger.css";

function Header() {
  const handleMenuClick = () => {
    document.querySelector(".hamburger").classList.toggle("is-active");
  };
  return (
    <div className="header">
      <a href="#Todo">
        <img
          src={logo}
          alt="Phanyya Logo"
          style={{ width: "5em", height: "2em" }}
        />
      </a>
      <button
        className="hamburger hamburger--minus"
        type="button"
        onClick={handleMenuClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
}

export default Header;
