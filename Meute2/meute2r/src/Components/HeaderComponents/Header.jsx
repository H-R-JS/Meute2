import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { NavbarPhone } from "../ComponentsPhone/NavPhone/NavbarPhone";
import Media from "react-media";

export const Header = () => {
  return (
    <header className="header-page">
      <div className="header-title">
        <Link to="/" className="h1-header">
          <h1>Meute2Rats</h1>
        </Link>
      </div>
      <div className="menu">
        <Media query="(max-width: 1000px)">
          {(matches) => (matches ? <NavbarPhone /> : <Navbar />)}
        </Media>
      </div>
    </header>
  );
};
