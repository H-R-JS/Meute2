import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavbarPhone } from "./NavbarPhone";

export const PhoneMenu = () => {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenuPhone = () => {
    if (menuOn == !true) {
      setMenuOn(true);
    } else {
      setMenuOn(false);
    }
  };
  return (
    <div>
      <div className="div-icon-menu" onClick={toggleMenuPhone}>
        <span className="material-symbols-outlined" id="icon-menu-phone">
          menu
        </span>
      </div>
      {menuOn && <NavbarPhone />}
      <Outlet />
    </div>
  );
};
