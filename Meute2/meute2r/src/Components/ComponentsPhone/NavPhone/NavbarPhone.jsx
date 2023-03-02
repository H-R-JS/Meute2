import React, { useState } from "react";
import { NavItemsPhone } from "./NavItemsPhone";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DropDownRPhone, DropDownPPhone } from "./DropDownPhone";

export const NavbarPhone = () => {
  const [menuDownR, setMenuDownR] = useState(false);
  const [menuDownP, setMenuDownP] = useState(false);
  return (
    <motion.div
      className="nav-phone"
      initial={{ x: -200 }}
      animate={{ display: "block", x: 0, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <ul className="nav-phone-content">
        {NavItemsPhone.map((item) => {
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
                {menuDownR && <DropDownRPhone />}
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
                {menuDownP && <DropDownPPhone />}
              </li>
            );
          }
          return (
            <li key={item.id}>
              <Link to={item.path} className={item.class}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
