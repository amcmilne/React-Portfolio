import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavTabs() {

  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link
          to="/"
          className={
              window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link" : "nav-link"}
        >
          About
        </Link>
      </li> 
      <li className="nav-item">
        <Link
          to="/projects"
          className={
            window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/repos"
          className={
            window.location.pathname === "/repos" ? "nav-link active" : "nav-link"}
        >
          Repos
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
