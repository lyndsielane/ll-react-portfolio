import React from "react";
import "../styles/Contact.css";
import "googlefonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section class="contact" id="contact-me">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <a href="tel:6783465328" alt="call Lyndsie">
            <FontAwesomeIcon icon={faMobile} />
          </a>
        </li>
        <li>
          <a href="mailto:lyndsielane@yahoo.com" alt="email Lyndsie">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lyndsielane"
            alt="Lyndsie's Github"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lyndsie-lane-a859545a/"
            alt="Lyndsie's LinkedIn"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a
            href="src/assets/photos/Lyndsie Resume.pdf"
            alt="Lyndsie's Resume"
            target="blank"
          >
            <FontAwesomeIcon icon={faFile} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
