import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { HeaderPhone } from "../ComponentsPhone/HeaderPhone";
import Media from "react-media";

export const Header = () => {
  return (
    <Media query="(max-width: 1000px)">
      {(matches) => (matches ? <HeaderPhone /> : <HeaderPc />)}
    </Media>
  );
};

const HeaderPc = () => {
  return (
    <header className="header-page">
      <div className="header-title">
        <Link to="/" className="h1-header">
          <h1>Meute2Rats</h1>
        </Link>
        <div className="header-line"></div>
      </div>
      <Navbar />
    </header>
  );
};
