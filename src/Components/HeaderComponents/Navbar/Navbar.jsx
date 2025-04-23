import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import { DropDownR, DropDownP } from "./MenuDropDown/DropDown";

export const Navbar = () => {
  const [menuDownR, setMenuDownR] = useState(false);
  const [menuDownP, setMenuDownP] = useState(false);

  return (
    <ul className="menu-content">
      {NavItems.map((item) => {
        if (item.id === "2") {
          return (
            <li
              key={item.id}
              onMouseEnter={() => setMenuDownR(true)}
              onMouseLeave={() => setMenuDownR(false)}
              className="nav-li"
            >
              <Link to={item.path} className={item.class}>
                {item.title}
              </Link>
              {menuDownR && <DropDownR />}
            </li>
          );
        } else if (item.id === "4") {
          return (
            <li
              key={item.id}
              onMouseEnter={() => setMenuDownP(true)}
              onMouseLeave={() => setMenuDownP(false)}
              className="nav-li"
            >
              <Link to={item.path} className={item.class}>
                {item.title}
              </Link>
              {menuDownP && <DropDownP />}
            </li>
          );
        }

        return (
          <li key={item.id} className="nav-li">
            <Link to={item.path} className={item.class}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
