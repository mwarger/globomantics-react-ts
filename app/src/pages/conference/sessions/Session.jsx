import * as React from "react";
import { SessionDetails } from "./SessionDetails";

export function Session() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <SessionDetails />
          </div>
        </div>
      </section>
    </>
  );
}
