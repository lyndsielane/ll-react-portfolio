import React from "react";
import "../styles/Skills.css";
/*import "src/assets/script/script.js";*/
import "animejs";
import "googlefonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <section class="skillset">
      <div class="skills">
        <p>Skills</p>
      </div>
      <ul class="list-inline skillicons">
        <li>
          <FontAwesomeIcon icon={faHtml5} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3} />
        </li>
        <li>
          <FontAwesomeIcon icon={faJsSquare} />
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faNodeJs} />
        </li>
        <li>
          <FontAwesomeIcon icon={faNpm} />
        </li>
      </ul>
    </section>
  );
}

export default Skills;
