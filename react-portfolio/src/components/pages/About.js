import React from "react";
import Header from "../Header";
import NavTabs from "../NavTabs/NavTabs";
import Footer from "../Footer";

function About() {
  return (
    <div>
      <Header />
      <NavTabs />
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
      <Footer />
    </div>
  );
}

export default About;
