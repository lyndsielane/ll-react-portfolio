import React from "react";
import "../styles/Skills.css";
/*import "src/assets/script/script.js";*/
import "animejs";
import "googlefonts";
import "bootstrap";
import "fontawesome";

function Skills() {
  return (
    <section class="skillset">
      <div class="skills">
        <p>Skills</p>
      </div>
      <ul class="list-inline skillicons">
        <li>
          <i class="fab fa-html5"></i>
        </li>
        <li>
          <i class="fab fa-css3-alt"></i>
        </li>
        <li>
          <i class="fab fa-js-square"></i>
        </li>
        <li>
          <i class="fab fa-react"></i>
        </li>
        <li>
          <i class="fab fa-github-square"></i>
        </li>
        <li>
          <i class="fab fa-node-js"></i>
        </li>
        <li>
          <i class="fab fa-npm"></i>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
