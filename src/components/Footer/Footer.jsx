import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="pb-0">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="footer-text">
                &copy; Copyright 2023 - Marcin Kapturski
              </span>
            </div>
            <div className="col-md-6">
              <p className="footer-text">
                This is as a playground for automation tests, code is available on this
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/marcinkapturski/"
                >
                  <b className="footer-link">GitHub profile</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
