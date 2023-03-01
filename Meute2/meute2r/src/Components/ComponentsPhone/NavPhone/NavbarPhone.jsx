import React from "react";
import { NavItemsPhone } from "./NavItemsPhone";
import { Link } from "react-router-dom";

export const NavbarPhone = () => {
  return (
    <div className="nav-phone">
      <ul className="nav-phone-content">
        {NavItemsPhone.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path} className={item.class}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
