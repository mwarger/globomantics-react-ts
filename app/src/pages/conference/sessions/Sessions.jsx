import * as React from "react";
import { Link } from "react-router-dom";
import { SessionList } from "./SessionList";

export function Sessions() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row" style={{ padding: 10 }}>
            <Link
              className="btn btn-primary btn-lg center-block"
              to={`/conference/sessions/new`}
            >
              Submit a Session!
            </Link>
          </div>
          <div className="row">
            <SessionList />
          </div>
        </div>
      </section>
    </>
  );
}
