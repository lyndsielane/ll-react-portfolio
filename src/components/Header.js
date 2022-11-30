import React from "react";
import "../styles/Header.css";
import "googlefonts";
import "bootstrap";
import logo from "../assets/photos/ll-logo.png";

function Header() {
  return (
    <nav>
      <div class="nav-bg"></div>
      <img src={logo} alt="lyndsie-logo" class="logo"></img>
      <ul class="nav-ul" id="nav-ul">
        <li>
          <a href="#about" alt="about-me">
            About Me{" "}
          </a>
        </li>
        <li>
          <a href="#my-work" alt="my-work">
            My Work
          </a>
        </li>
        <li>
          <a href="#contact-me" alt="contact-me">
            Contact Me{" "}
          </a>
        </li>
        <li>
          <a
            href="src/assets/photos/Lyndsie Resume.pdf"
            alt="resume"
            target="blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
