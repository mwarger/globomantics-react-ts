import * as React from "react";
import { useRouteMatch, Link } from "react-router-dom";

export function Navigation() {
  const { url } = useRouteMatch();

  return (
    <section className="banner">
      <img src="images/banner3.png" alt="" />
      <div className="col-md-12" style={{ position: "absolute", top: 50 }}>
        <div className="container jumboContainer">
          <div
            className="col-md-8 middle"
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Link
              style={{
                fontSize: 56,
                border: "solid 1px white",
                borderRadius: 20,
                margin: 20,
                padding: 20,
                textAlign: "center",
                backgroundColor: "#0D1424",
                textTransform: "capitalize",
              }}
            >
              View speakers
            </Link>
            <Link
              style={{
                fontSize: 56,
                border: "solid 1px white",
                borderRadius: 20,
                margin: 20,
                padding: 20,
                textAlign: "center",
                backgroundColor: "#0D1424",
                textTransform: "capitalize",
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
                textAlign: "center",
                backgroundColor: "#0D1424",
                textTransform: "capitalize",
              }}
              to={`${url}/about`}
            >
              about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
