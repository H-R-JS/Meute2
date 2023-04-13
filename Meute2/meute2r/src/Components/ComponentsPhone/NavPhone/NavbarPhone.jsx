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
      if (!ref.current.contains(e.target)) {
        controls.start({
          x: -500,
          transition: { duration: 0.2 },
        });
        console.log("clicked Outside DIV...");
      } else {
        console.log("clicked Inside DIV...");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //
  return (
    <div ref={ref}>
      <div
        onClick={() => {
          controls.start({
            display: "block",
            x: 0,
            transition: { duration: 0.2 },
          });
        }}
        className="div-icon-menu"
      >
        <span className="material-symbols-outlined" id="icon-menu-phone">
          menu
        </span>
      </div>
      <motion.div
        className="nav-phone"
        initial={{ display: "none", x: -400 }}
        animate={controls}
      >
        <ul className="nav-phone-content">
          {NavItems.map((item) => {
            if (item.id === "2") {
              return (
                <li
                  key={item.id}
                  onMouseEnter={() => setMenuDownR(true)}
                  onMouseLeave={() => setMenuDownR(false)}
                  className="nav-li"
                >
                  <div className="item-nav-phone drop">{item.title}</div>
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
                  <div className="item-nav-phone drop">{item.title}</div>
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
        </ul>
        <Link to="/">
          <span className="material-symbols-outlined" id="nav-phone-home">
            home
          </span>
        </Link>
      </motion.div>
    </div>
  );
};
