import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div class="nav-bg"></div>
      <img
        src="./assets/Photos/LL Circle Template.png"
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
            href="./assets/Files/Lyndsie Lane Resume.pdf"
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
