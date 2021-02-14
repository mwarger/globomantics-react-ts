import * as React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { HeroLinkButton } from "./HeroLinkButton";

export function Navigation() {
  const { url } = useRouteMatch();

  return (
    <section className="banner">
      <img src="images/banner3.png" alt="" />
      <div className="inner-content col-md-12">
        <div className="container jumboContainer">
          <div className="col-md-8 middle">
            <Link
              style={{
                fontSize: 56,
                border: "solid 1px white",
                borderRadius: 20,
                margin: 20,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#0D1424",
              }}
              to={`${url}/speakers`}
            >
              View Speakers
            </Link>
            <Link
              style={{
                fontSize: 56,
                border: "solid 1px white",
                borderRadius: 20,
                margin: 20,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#0D1424",
              }}
              to={`${url}/sessions`}
            >
              View Sessions
            </Link>
            <Link
              style={{
                fontSize: 56,
                border: "solid 1px white",
                borderRadius: 20,
                margin: 20,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#0D1424",
              }}
              to={`${url}/about`}
            >
              About Our Conference
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
