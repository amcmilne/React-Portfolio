import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={
              window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
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
