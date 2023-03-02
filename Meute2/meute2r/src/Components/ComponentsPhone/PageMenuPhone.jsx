import React from "react";
import { Navbar } from "../HeaderComponents/Navbar";
import { NavItemsPhone } from "./NavPhone/NavItemsPhone";

export const PageMenuPhone = () => {
  return (
    <div>
      <div className="menu-page">
        <div className="menu-title">
          <h1>Meute2Rats</h1>
          <div className="menu-line"></div>
        </div>
        <Navbar dataArray={NavItemsPhone} />
      </div>
    </div>
  );
};
