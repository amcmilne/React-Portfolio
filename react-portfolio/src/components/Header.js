import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section class="hero is-dark is-medium">
      <div class="hero-head">
        <nav class="navbar-brand is-mobile has-background-dark">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={
                    window.location.pathname === "/projects"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/repos"
                  className={
                    window.location.pathname === "/repos"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Repos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="hero-title">Ann Cooper-Milne</h1>
          <h2 class="subtitle">
            Student of The Ohio State School of Engineering: Coding Boot Camp
          </h2>
          <h3>
            <span class="panel-icon">
              <i class="far fa-envelope"></i>
            </span>
            amccmilne@gmail.com
            <span class="panel-icon">
              <i class="fas fa-mobile-alt"></i>
            </span>
            (973)213-1611
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Header;
