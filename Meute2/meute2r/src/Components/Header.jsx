import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./HeaderComponents/Navbar";

export const Header = () => {
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
