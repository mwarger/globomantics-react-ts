import * as React from "react";
import { Link } from "react-router-dom";

export function HeroLinkButton({ to, label }) {
  return (
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
      to={to}
    >
      {label.toLowerCase()}
    </Link>
  );
}
