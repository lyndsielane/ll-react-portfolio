import React from "react";
import "../styles/Contact.css";
import "googlefonts";
import "bootstrap";

function Contact() {
  return (
    <section class="contact" id="contact-me">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <a href="tel:6783465328" alt="call Lyndsie">
            <i class="fas fa-mobile-alt"></i>
          </a>
        </li>
        <li>
          <a href="mailto:lyndsielane@yahoo.com" alt="email Lyndsie">
            <i class="fas fa-envelope-open-text"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lyndsielane"
            alt="Lyndsie's Github"
            target="blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lyndsie-lane-a859545a/"
            alt="Lyndsie's LinkedIn"
            target="blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="./assets/Files/Lyndsie Lane Resume.pdf"
            alt="Lyndsie's Resume"
            target="blank"
          >
            <i class="fas fa-file"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
