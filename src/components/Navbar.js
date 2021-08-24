import React from "react";
import "../styles/Navbar.css";
import "googlefonts";
import "bootstrap";
import "fontawesome";
import "../assets/photos/ll-circle.png";

function Navbar() {
  return (
    <nav>
      <div class="nav-bg"></div>
      <img
        src="../assets/photos/ll-circle.png"
        alt="lyndsie-logo"
        class="logo"
      />
      <button class="hamburger" id="hamburger">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-ul" id="nav-ul">
        <li>
          <a href="#about" alt="about-me">
            About Me
          </a>
        </li>
        <li>
          <a href="#my-work" alt="my-work">
            My Work
          </a>
        </li>
        <li>
          <a href="#contact-me" alt="contact-me">
            Contact Me
          </a>
        </li>
        <li>
          <a
            href="#resume"
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

export default Navbar;
