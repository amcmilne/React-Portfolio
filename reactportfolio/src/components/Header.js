import React from "react";

function Header() {
  return (
    <div>
      <section class="hero is-dark is-medium">
        <div class="hero-head">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="hero-title">Ann Cooper-Milne</h1>
              <h2 className= "hero-content"> Full Stack Web Developer</h2>
              <h3>
                <span class="panel-icon">
                  <i class="far fa-envelope"></i>
                </span>
                amcmilne@gmail.com
                <span class="panel-icon">
                  <i class="fas fa-mobile-alt"></i>
                </span>
                (614)467-0179
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
