import React from "react";

function Projects() {
  return (
    <div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <strong>
              <p className="tile-title">React Portfolio</p>
            </strong>
            <p className="subtitle is-italic">React Assignment</p>
            <strong>
              <a
                className="navbar-item"
                href="https://github.com/amcmilne/React-Portfolio"
                alt="website"
              >
               <span
                className="iconify"
                data-icon="octicon-mark-github-16"
                data-inline="false"
              ></span>   
                &nbsp;React Portfolio
              </a>
            </strong>

            <div className="content">
              <p>
                This is my final portfolio using React, NodeJS, HTML, CSS, JS,
                and finalizing my projects I have completed during my bootcamp.
              </p>
              <ul>
                <li>
                  <strong>Tech Required:</strong>
                </li>

                <li>React</li>
                <li>Bootstrap</li>
                <li>React-Router-DOM</li>
                <li>Visual Studio Code</li>
                <li>GitHub Repo - React Portfolio</li>
                <li>Axios</li>
                <li>Material UI</li>
                <li>GitHub Pages</li>
              </ul>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <figure className="image is-4by3">
              <img
                src="./images/reactportfolio.gif"
                alt="screenshot"
              />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <strong>
              <p className="tile-title">Brewery Finder</p>
            </strong>
            <p className="subtitle is-italic">Group Project #1</p>
            <strong>
              <a
                className="navbar-item"
                href="https://amcmilne.github.io/Brewery-Finder/"
                alt="website"
              >
               <span
                className="iconify"
                data-icon="octicon-mark-github-16"
                data-inline="false"
              ></span> 
                &nbsp;Brewery-Finder
              </a>
            </strong>

            <div className="content">
              <p>
                The Brewery Finder application allows the user to search for
                information on breweries by city and state and filter the
                response by type (e.g. micro brewery, nano brewery, bar, etc.).
                The application will also automatically render results for the
                user's current location, if any are nearby. Additionally, if the
                user desires information for a specific brewery, they may make a
                search by name. The page will only display five results at most,
                but a user may paginate through the results using the next and
                previous buttons located at the bottom of the page. For each
                displayed brewery, the name, address, phone number, and website
                of the brewery will be provided if available from the database.
                A random brewery-related image from Pexels is appended to each
                rendered brewery section as well.
              </p>
              <ul>
                <li>
                  <strong>Tech Required:</strong>
                </li>

                <li>
                  Bulma - is a free, open source CSS framework based on Flexbox
                </li>
                <li>jQuery</li>
                <li>
                  FontAwesome - v5.14.0; Get vector icons and social logos on
                  your website.
                </li>
                <li>Visual Studio Code</li>
                <li>GitHub Repo - Brewery Finder</li>
                <li>
                  OpenBreweryDB - free dataset and API with public information
                  on breweries, cideries, brewpubs, and bottleshops.
                </li>
                <li>
                  PexelsAPI - helps you incorporate the world’s best free stock
                  photos and videos into your app or website.
                </li>
                <li>
                  LocationIQ - provides flexible enterprise-grade location based
                  solutions.
                </li>
                <li>Dillinger - online Mardown Editor</li>
              </ul>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <figure className="image is-4by3">
              <img
                src="./images/breweryfinderimg.png"
                alt="brewery screenshot"
              />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <strong>
              <p className="tile-title">Workout Tracker</p>
            </strong>
            <p className="subtitle is-italic">MongoDB Assignment</p>
            <strong>
              <a
                className="navbar-item"
                href="https://github.com/amcmilne/Workout-Tracker/"
                alt="website"
              >
              <span
                className="iconify"
                data-icon="octicon-mark-github-16"
                data-inline="false"
              ></span> 
               &nbsp;Workout Tracker
              </a>
            </strong>

            <div className="content">
              <p>
                For this assignment, I have created a workout tracker that
                allows a user to view, create, and track daily workouts. The
                user will be able to log multiple exercises in a workout on a
                given day. The user will also be able to track the name, type,
                weight, sets, reps, and duration of exercise. If the exercise is
                a cardio exercise, the user should be able to track their
                distance traveled.
              </p>
              <ul>
                <li>
                  <strong>Tech Required:</strong>
                </li>

                <li>MongoDB</li>
                <li>MongoSB Atlas</li>
                <li>Node JS</li>
                <li>Visual Studio Code</li>
                <li>GitHub Repo - Workout Tracker</li>
                <li>Heroku</li>
              </ul>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <figure className="image is-4by3">
              <img src="./images/workoutapp.gif" alt="screenshot" />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <strong>
              <p className="tile-title">Employee Tracker</p>
            </strong>
            <p className="subtitle is-italic">React Assignment</p>
            <strong>
              <a
                className="navbar-item"
                href="https://github.com/amcmilne/Employee-Directory"
                alt="website"
              >
                <span
                className="iconify"
                data-icon="octicon-mark-github-16"
                data-inline="false"
              ></span> 
                &nbsp;Employee Tracker
              </a>
            </strong>

            <div className="content">
              <p>
                For this assignment, I created an employee directory with React.
                This assignment divides application's UI into components,
                manages component state, and responds to user events.
              </p>
              <ul>
                <li>
                  <strong>Tech Required:</strong>
                </li>

                <li>Node JS</li>
                <li>GitHub Pages</li>
                <li>Visual Studio Code</li>
                <li>GitHub Repo - Employee Directory</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Google Font</li>
                <li>Axios</li>
                <li>Random User API</li>
              </ul>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <figure className="image is-4by3">
              <img src="./images/app.gif" alt="screenshot" />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <strong>
              <p className="tile-title">Camping Planner</p>
            </strong>
            <p className="subtitle is-italic">Group Project #2</p>
            <strong>
              <a
                className="navbar-item"
                href="https://campingplanner.herokuapp.com/"
                alt="websiteimg"
              >
                <span className="panel-icon">
                  <img
                    id="heroku"
                    src="https://img.icons8.com/nolan/25/heroku.png"
                    alt="heroku"
                  />
                </span>
                Camping Planner
              </a>
            </strong>
            <div className="content">
              <p>
                Camping Planner application uses a series of technologies to
                create a functioning app that allows users to choose from a list
                of national parks and in turn get back a series of details about
                their trip location, add and create an equipment list and select
                certain parks as favorites to store and look back on later. When
                the user reaches the welcome screen, they will then be prompted
                to create a new username and password, or for returning users,
                enter their already created credentials. To store the user data,
                we have used dependencies Bycrptjs to hash password data and
                Passport to create the login/sign-up forms. Once logged in users
                will be prompted to choose from a list of states. Once a
                selection is made, the user will be routed to another list of
                National Parks that reside in the selected state. These lists
                are sourced from our SQL seed files, data from National Parks
                API
                (https://www.nps.gov/subjects/developer/api-documentation.htm).
                Finally users will be routed to a page that holds information
                they will need for their trip such as the park address, link to
                the park website and weather data will be provided. This data
                will is able to be sent via email using Mailgun-js, this way
                users may share information with other trip goers. Another
                application feature is the ability to favorite parks and have
                them stored separately. This feature allows users to select
                certain parks that they may want to revisit for future trips or
                to help narrow down park choices. The final feature is a
                checklist where users can select what they already own and as
                well as add items not on the list that they may still need. Once
                added and selected, users can go to a page where their completed
                personalized checklist will show. Users are then able to print
                the list or return to the location information page.
              </p>
              <ul>
                <li>
                  <strong>Tech Required:</strong>
                </li>
                <li>Visual Studio Code</li>
                <li>MYSQL</li>
                <li>MYSQL WorkBench</li>
                <li>Heroku</li>
                <li>Github Repo- Camping Planner</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
                <li>FontAwesome</li>
                <li>Javascript</li>
                <li>
                  <strong>Dependencies:</strong>
                </li>
                <ul>
                  <li>bcryptjs (Store Username/password)</li>
                  <li>Express</li>
                  <li>Express-Handlebars</li>
                  <li>Mailgun-js (Send email function)</li>
                  <li>MySQL</li>
                  <li>Passport</li>
                  <li>Sequelize</li>
                </ul>
              </ul>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <figure className="image is-4by3">
              <img
                src="./images/campingplanner2.png"
                alt="camping screenshot"
              />
            </figure>
            <figure className="image is-4by3">
              <img src="./images/campingplanner.png" alt="camping site" />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <strong>
              <p className="tile-title">Burger Town</p>
            </strong>
            <p className="subtitle is-italic">Homework Assignment</p>
            <strong>
              <a
                className="navbar-item"
                href="https://ancient-river-62644.herokuapp.com/"
                alt="websiteimg"
              >
                <span className="panel-icon">
                  <img
                    id="heroku"
                    src="https://img.icons8.com/nolan/25/heroku.png"
                    alt="heroku icon"
                  />
                </span>
                Burger Town
              </a>
            </strong>
            <div className="content">
              <p>
                Whenever a user chooses a burger name, the app will display the
                burger on the left side of the page -- waiting for payment. Each
                burger in the waiting area also has a Pay button. When the user
                clicks it, the burger will move to the right side of the page.
                When the user confirms they picked up their burger they will
                click the Goodbye button, and the burger will be removed.
              </p>
              <ul>
                <li>
                  <strong>Tech Required:</strong>
                </li>
                <li>VS Code</li>
                <li>MYSQL WorkBench</li>
                <li>Heroku</li>
                <li>Github</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>MYSQL</li>
                <li>Express-Handlebars</li>
              </ul>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <figure className="image is-4by3">
              <img src="./images/burgerlogger.png" alt="burger website" />
            </figure>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Projects;
