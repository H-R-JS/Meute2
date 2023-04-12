import React from "react";
import { Navbar } from "../HeaderComponents/Navbar/Navbar";
import { NavItems } from "../HeaderComponents/Navbar/NavItems";
import { MotionOnePageAnimation } from "../MotionDiv/AllMotionDiv";

export const HomePhone = () => {
  return (
    <MotionOnePageAnimation>
      <Navbar />
    </MotionOnePageAnimation>
  );
};
