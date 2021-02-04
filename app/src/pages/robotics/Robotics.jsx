import React from "react";
import "./style-robotics.css";

// <link href="css/bootstrap.min.css" rel="stylesheet"/>
// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"/>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
// <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
// <link href="css/style-robotics.css" rel="stylesheet"/>
// <script src="js/jquery.min.js"></script>
// <script src="js/bootstrap.min.js"></script>
// <script>
//   jQuery(document).ready(function () {
//     // alert(&quot;wow&quot;);
//     //  jQuery(&quot;header&quot;).addClass(&quot;fixed&quot;);
//     jQuery(&quot;#hamburger&quot;).click(function () {
//       //alert(&quot;The paragraph was clicked.&quot;);
//       jQuery(&quot;header&quot;).toggleClass(&quot;fixed&quot;);
//     });
//   });
// </script>
export function Robotics() {
  return (
    <>
      <section className="banner">
        <img src="./Hero.png" alt="" />
        <div className="inner-content col-md-12">
          <div className="container">
            <h1>ROBOTICS</h1>
            <span>ALSO A STORY OF LIFE</span>

            <p>Life evolves, robotics are no different.</p>
          </div>
        </div>
      </section>

      <section className="sec_include">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 adj1 text-center">
              <h3>
                Building on existing research and working closely with the
                defense department and other defense industry partners, we are a
                proud to announce a new breakthrough that represents a massive
                leap forward in artificial intelligence and advanced robotics.
              </h3>
              <p>
                This elegant combination technologies will revolutionize the
                human condition, changing everything from the way we protect our
                countries and police our people to how you clean your home. No
                longer do the countries of the world have to settle disputes
                with needless expenditure of human life. Now wars can be fought
                and won by value of your Globomantics Mark 1 upgrade selections.
                More than any other time in history, wars will be won by the
                willingness to spend rather than the strength of will of the
                individual.
              </p>

              <h3>
                “We look forward to fulfilling your human replacement needs.”
              </h3>
              <p>
                But the applications don’t end there. Tired of being on the hook
                for being yourself 24/7 365? Enter U bot v1. It’s U but better!
                Using a proprietary DNA and behavior analysis technology, you
                can now customize our U class humanoid robotic platform to be an
                exact physical and behavioral replica of yourself! No more
                washing dishes, video chatting with your i-laws, or watching
                your children, replace yourself with U!
              </p>
              <p>
                No matter the applications, all Globomantics Mark 1 and U line
                robots are hard coded to protect human life at all cost, even if
                the threat is humans themselves. You should never feel safer
                than when integrating our robtics platforms into all aspects of
                your life and community.
              </p>

              <p>We look forward to fulfilling your human replacement needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_include1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 adj_text">
              <h2>medicine</h2>
              <img src="images/shutterstock_734412034.png" alt="medicine" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 adj_text">
              <h2>AGRICULTURE</h2>
              <img src="images/shutterstock_725256820.png" alt="Public" />
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 adj_text">
              <h2>MANUFACTURING</h2>
              <img src="images/shutterstock_645747736.png" alt="scope" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 adj_text">
              <h2>ASSISTANTS</h2>
              <img src="images/shutterstock_662279290.png" alt="Public" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
