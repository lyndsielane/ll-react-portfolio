import React from "react";
import "../styles/About.css";
import "googlefonts";
import photo from "../assets/photos/ll-portrait.jpg";

function About() {
  return (
    <section id="about">
      <div class="row section-intro">
        <div class="col-twelve">
          <div class="intro-info">
            <img src={photo} alt="Lyndsie self-portrait" />
            <div class="lead">
              <p>
                Hello, I'm Lyndsie Lane, a full-stack developer with a passion
                for front-end and the user experience. I have a background in
                customer service and management. I have implemented new services
                and trained employees while streamlining new business practices.
                I am well versed in deescalation and ensuring customers are
                cared for throughout any processes involved in fulfilling their
                needs. My experience has given me detailed views of business
                from the customer, employee, and business standpoint.
              </p>
              <p>
                After studying coding at Georgia Tech, I am moving into a coding
                career and know that my past experience will bring value into
                this new career path. My creativity, dedication, and hard work
                combined with bountiful experience make me a great fit for any
                application or website development. I look forward to centering
                my work on ensuring a well planned and executed customer first
                experience.
              </p>
              <p>
                Take a look below at a handful of my projects and designs. I am
                continuously updating this page, please check back for more. Any
                of the links above will allow you to contact me if you would
                like to discuss anything you see.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
