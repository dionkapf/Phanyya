import React, { Component } from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import "./hamburger.css";

class Header extends Component {
  handleMenuClick() {
    document.querySelector(".hamburger").classList.toggle("is-active");
  }
  render() {
    return (
      <div className="header">
        <h1>
          <img
            src={logo}
            alt="Todoer Logo"
            style={{ width: "8vw", height: "8vw" }}
          />
          Todoer
        </h1>
        <button
          className="hamburger hamburger--minus"
          type="button"
          onClick={this.handleMenuClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    );
  }
}

export default Header;
