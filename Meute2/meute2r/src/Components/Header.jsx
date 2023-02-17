import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "./Header/Navbar";

export const Header = () => {
  return (
    <div className="header-page">
      <div className="header-title">
        <h1>Meute2Rats</h1>
        <div className="header-line"></div>
      </div>
      <Navbar />
    </div>
  );
};
