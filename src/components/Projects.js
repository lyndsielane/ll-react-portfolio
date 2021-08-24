import React from "react";
import "../styles/Projects.css";
import "animejs";
import "googlefonts";
import "bootstrap";
import "fontawesome";
import Fido from "../assets/photos/FidoFriendly.png";
import Team from "../assets/photos/127.0.0.1_5500_dist_team.html.png";
import Weather from "../assets/photos/127.0.0.1_5500_index.html_ (1).png";
import Scheduler from "../assets/photos/127.0.0.1_5500_index.html (1).png";

function Skills() {
  return (
    <div class="main" id="my-work">
      <h1>My Work</h1>
      <ul class="cards">
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src={Fido} alt="website preview" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Fido Friendly</h2>
              <p class="card_text">
                A website that tells you if your movie choice is safe to watch
                with your pet.
              </p>
              <div class="buttons">
                <button
                  class="btn card_btn"
                  onclick="window.location.href='https://github.com/lyndsielane/fido-friendly';"
                >
                  Github Repo
                </button>
                <button
                  class="btn card_btn"
                  onclick="window.location.href='https://hr-ivey.github.io/fido-friendly/';"
                >
                  Website
                </button>
              </div>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src={Team} alt="app preview" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Team Profile Generator</h2>
              <p class="card_text">
                A command line program that generates an HTML team profile page.
              </p>
              <div class="buttons">
                <button
                  class="btn card_btn"
                  onclick="window.location.href='https://github.com/lyndsielane/team-profile-generator';"
                >
                  Github Repo
                </button>
                <button
                  class="btn card_btn"
                  onclick="window.location.href='https://drive.google.com/file/d/1zl0_9398WcZNM_8MKKOcxg_x0wWXKZUw/view';"
                >
                  App Preview
                </button>
              </div>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src={Weather} alt="app preview" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Weather Dashboard</h2>
              <p class="card_text">
                An easy interface to find current weather and 5-day forecasts
                for any city.
              </p>
              <div class="buttons">
                <button
                  class="btn card_btn"
                  onclick="window.location.href='https://github.com/lyndsielane/weather-dashboard';"
                >
                  Github Repo
                </button>
                <button
                  class="btn card_btn"
                  onclick="window.location.href='https://lyndsielane.github.io/weather-dashboard/';"
                >
                  Website
                </button>
              </div>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src={Scheduler} alt="app preview" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Work Day Scheduler</h2>
              <p class="card_text">
                A simple and intuitive planner to schedule your work day quickly
                and efficiently.
              </p>
              <div class="buttons">
                <button
                  class="btn card_btn"
                  onclick="window.location.href='https://github.com/lyndsielane/work-day-scheduler';"
                >
                  Github Repo
                </button>
                <button
                  class="btn card_btn"
                  onclick="window.location.href='https://lyndsielane.github.io/work-day-scheduler/';"
                >
                  Website
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
