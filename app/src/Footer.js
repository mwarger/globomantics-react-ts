import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="main-footer col-md-12 col-xs-12">
          <div className="foter-logo col-md-3 col-sm-3 col-xs-2">
            <a href="index.html">
              <img
                className="desktop"
                src="images/Globo-Logo-white-footer.svg"
                alt=""
              />
              <img className="mobileImg" src="images/G.png" alt="" />
            </a>
          </div>
          <div className="links col-md-5 col-md-5 col-xs-10">
            <ul className="quick-links col-md-4 col-xs-6">
              <li>
                <Link to="/our-story">Our Story</Link>
              </li>
              <li>
                <Link to="/robotics">Robotics</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/conference">Conference</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="video-sec col-md-4 col-sm-12 col-xs-12">
        <h1 className="video-heading text-center">
          <img src="images/pluralsight-white.png" alt="" />
        </h1>
        <span className="border"></span>
        <p className="footer-p">
          This site is created for demonstrative purposes only and does not
          offer any real products or services.
        </p>
        <p></p>
      </div>
    </footer>
  );
}
