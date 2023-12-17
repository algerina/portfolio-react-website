import React from "react";  /* eslint-disable */
import "./footer.css";
// import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Algerina
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/qahwadji/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/AmalQahwadji">
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Algerina All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
