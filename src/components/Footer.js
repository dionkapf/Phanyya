// @ts-check
import React from "react";
import "./Footer.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

function FooterButton(props) {
  return (
    <a href={props.link}>
      <img className="circle" src={props.src} alt={props.alt} />
    </a>
  );
}

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-buttons">
        <FooterButton
          link="https://twitter.com/dionishe"
          alt="Twitter logo"
          src={twitter}
        />
        <FooterButton
          link="https://github.com/dionkapf/Todoer/"
          alt="Github logo"
          src={github}
        />
        <FooterButton
          link="https://tz.linkedin.com/in/dion-kapfumvuti-6a13701aa"
          alt="LinkedIn logo"
          src={linkedin}
        />
      </div>

      <p className="notice">Copyright &#169; 2021 Dion Kapfumvuti</p>
    </div>
  );
}

export default Footer;
