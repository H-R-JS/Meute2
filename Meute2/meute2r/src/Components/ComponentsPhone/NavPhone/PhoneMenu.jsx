import React from "react";
import { Outlet } from "react-router-dom";
import { IconMenu } from "./IconMenu";
import { NavbarPhone } from "./NavbarPhone";

export const PhoneMenu = () => {
  return (
    <div>
      <IconMenu />
      <NavbarPhone />
      <Outlet />
    </div>
  );
};
