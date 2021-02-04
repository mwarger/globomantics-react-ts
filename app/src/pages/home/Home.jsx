import React from "react";
import "./style-home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="banner">
        <img src="images/hero_image.png" alt="" />
        <div className="inner-content col-md-12">
          <div className="container jumboContainer">
            <div className="col-md-8 middle">
              <h1>
                THE FUTURE
                <br />
                <span>WAS FIVE MINUTES AGO</span>.
              </h1>

              <p>We were there and it is going to be epic</p>
            </div>

            <div className="content-right col-md-4">
              <h3>FUTURE</h3>
              <span>CONFERENCE</span>
              <div className="text-center">
                <button type="button" className="btn btn-primary btn-lg">
                  SIGN UP TODAY
                </button>
              </div>
              <p>
                Tickets are selling fast get yours today and be there in the
                future
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_include">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 adj_text">
              <h3>DARK ENERGY</h3>
              <p>BRIGHTENS THE WORLD</p>
              <img src="images/Bitmap.png" alt="Public Adjuster" />

              <div className="read-more-btn">
                <Link to="/" className="btn-oval">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 adj_text">
              <h3>ROBOTICS</h3>
              <p>THEY ARE HERE AND THEY PLAY</p>
              <img src="images/Bitmap(1).png" alt="Public" />
              <div className="read-more-btn">
                <Link to="/robotics" className="btn-oval">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 adj_text">
              <h3>STRANGERS RISE</h3>
              <p>ASCENSION GOES TECHNICAL</p>
              <img src="images/shutterstock_211091626.png" alt="Public" />
              <div className="read-more-btn">
                <Link to="/" className="btn-oval">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
