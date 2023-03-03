import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavbarPhone } from "./NavbarPhone";

export const PhoneMenu = () => {
  return (
    <div>
      <NavbarPhone />
      <Outlet />
    </div>
  );
};
