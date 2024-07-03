//Import react, Link from router-dom and Logo image //
import React from "react";
import { Link } from "react-router-dom";
import HeartLogo from "../images/HeartLogo.jpg";

// Create NavMenu component //
export default function NavMenu() {
  return (
    <div>
      <header>
        <h3>Tinkerdreams</h3>
        <img
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            display: "inline-block",
            top: "33px",
            left: "185px",
            margin: "10px",
          }}
          src={HeartLogo}
          alt="logo"
        ></img>
        {/* Import Link to be able to Navigate to any page from current page */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About us</Link>
          <Link to="/Products">Products</Link>
        </nav>
      </header>
    </div>
  );
}
