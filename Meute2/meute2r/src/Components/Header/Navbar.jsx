import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuClicked, isMenuClicked] = useState(false);
  const [selectMenu, isSelectMenu] = useState("no-select");

  const toggleSelectMenu = (e) => {
    const targetClass = e.target.className;
    console.log(e.target.innerHTML);
    if (!menuClicked) {
      isSelectMenu("select-menu");
    } else {
      isSelectMenu("no-select");
    }
    isMenuClicked(!menuClicked);
  };

  return (
    <div className="menu">
      <div className="menu-content">
        <NavLink to="/reservation" className="link-d">
          Réservation
        </NavLink>
        <div className={selectMenu}>
          <NavLink className="link-g" onClick={toggleSelectMenu}>
            Réseaux
          </NavLink>
        </div>

        <NavLink to="/tarifs" className="link-d ">
          Tarifs
        </NavLink>
        <div className={selectMenu}>
          <NavLink className="link-g">Portée</NavLink>
        </div>

        <NavLink className="link-d">À propos</NavLink>
      </div>
    </div>
  );
};
