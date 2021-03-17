import React from "react";

function Footer() {
  return (
    <footer className="footer is-dark is-medium">
        <div className="content has-text-centered">
            <p>
                <strong>Portfolio</strong> by <a href="https://www.linkedin.com/in/amcmilneptaat/">Ann Cooper-Milne</a>.
                The
                source code is powered by
                <a href="https://github.com/amcmilne"> GitHub</a>.
            </p>
        </div>
        <nav className="level is-mobile">
            <div className="level-left">
                <a className="level-item" aria-label="linkedin" href="https://www.linkedin.com/in/amcmilneptaat/">
                    <span className="icon is-small">
                    <span className="iconify" data-icon="logos:linkedin-icon" data-inline="false"></span>
                    </span>
                </a>
                <a className="level-item" aria-label="github" href="https://github.com/amcmilne">
                    <span className="icon is-small">
                    <span className="iconify" data-icon="logos:github-icon" data-inline="false"></span>
                    </span>
                </a>
                <a className="level-item" aria-label="resume" href="./RESUME2020pdf.pdf">
                    <span className="icon is-small">
                    <span className="iconify" data-icon="vscode-icons:file-type-pdf" data-inline="false"></span>
                    </span>
                </a>
            </div>
        </nav>
    </footer>
  );
}

export default Footer;