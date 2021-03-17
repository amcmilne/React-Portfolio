import React from "react";

function Header() {
  return (
    <div>
      <section className="hero is-dark is-medium">
        <div className="hero-head">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="hero-title">Ann Cooper-Milne</h1>
              <h3>
                <span className="panel-icon">
                  <i className="far fa-envelope"></i>
                </span>
                amccmilne@gmail.com
                <span className="panel-icon">
                  <i className="fas fa-mobile-alt"></i>
                </span>
                (973)213-1611
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
