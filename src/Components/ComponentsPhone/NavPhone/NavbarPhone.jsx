import React, { useEffect, useState, useRef } from "react";
import { NavItems } from "../../HeaderComponents/Navbar/NavItems";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { DropDownRPhone, DropDownPPhone } from "./DropDownPhone";

export const NavbarPhone = () => {
  const [menuDownR, setMenuDownR] = useState(false);
  const [menuDownP, setMenuDownP] = useState(false);
  // Animation menu
  let ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !ref.current.contains(e.target) ||
        e.target.href === window.location.href
      ) {
        controls.start({
          x: -500,
          transition: { duration: 0.2 },
        });
      } else {
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [controls]);
  //
  return (
    <article ref={ref}>
      <span
        onClick={() => {
          controls.start({
            display: "block",
            x: 0,
            transition: { duration: 0.2 },
          });
        }}
        className="material-symbols-outlined"
        id="icon-menu-phone"
      >
        menu
      </span>
      <motion.ul
        initial={{ display: "none", x: -400 }}
        animate={controls}
        className="nav-phone-content"
      >
        {NavItems.map((item) => {
          if (item.id === "2") {
            return (
              <li
                key={item.id}
                onMouseEnter={() => setMenuDownR(true)}
                onMouseLeave={() => setMenuDownR(false)}
                className="nav-li"
              >
                <span className="item-nav-phone drop">{item.title}</span>
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
                <span className="item-nav-phone">{item.title}</span>
                {menuDownP && <DropDownPPhone />}
              </li>
            );
          }
          return (
            <li key={item.id}>
              <Link to={item.path} className="item-nav-phone">
                {item.title}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </article>
  );
};
