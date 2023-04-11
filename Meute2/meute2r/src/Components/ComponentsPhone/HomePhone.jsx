import React from "react";
import { Navbar } from "../HeaderComponents/Navbar/Navbar";
import { NavItemsPhone } from "./NavPhone/NavItemsPhone";
import { MotionOnePageAnimation } from "../MotionDiv/AllMotionDiv";

export const HomePhone = () => {
  return (
    <MotionOnePageAnimation>
      <div className="menu-page">
        <div className="menu-title">
          <h1>Meute2Rats</h1>
          <div className="menu-line"></div>
        </div>
        <Navbar dataArray={NavItems} />
      </div>
    </MotionOnePageAnimation>
  );
};
