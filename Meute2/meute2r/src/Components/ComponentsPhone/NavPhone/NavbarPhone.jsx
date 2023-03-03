import React, { useEffect, useState, useRef } from "react";
import { NavItemsPhone } from "./NavItemsPhone";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { DropDownRPhone, DropDownPPhone } from "./DropDownPhone";

export const NavbarPhone = () => {
  const [menuDownR, setMenuDownR] = useState(false);
  const [menuDownP, setMenuDownP] = useState(false);

  const [menuOn, setMenuOn] = useState(false);
  const [displayOn, setDisplayOn] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setMenuOn(false);
      } else {
        console.log("clicked Inside DIV...");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    if (menuOn == !true) {
      setMenuOn(true);
      setDisplayOn(true);
    } else {
      setMenuOn(false);
    }
  };

  const controls = useAnimation();

  return (
    <div ref={ref}>
      <div
        /*onClick={toggleMenu}*/ onClick={() => {
          controls.start({
            display: "block",
            x: 0,
            transition: { duration: 0.3 },
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
        initial={{ display: "none" }}
        animate={controls}
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
    </div>
  );
};
/** {menuOn ? (
          <div>
            <motion.div
              style={{ opacity: 1 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
            >
              <span className="material-symbols-outlined" id="icon-menu-phone">
                menu
              </span>
            </motion.div>
          </div>
        ) : (
          <div>
            <motion.div
              style={{ opacity: 1 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
            >
              <span className="material-symbols-outlined" id="icon-menu-phone">
                menu
              </span>
            </motion.div>
            <motion.div
              style={{ x: 0 }}
              animate={{
                x: iconOn ? 0 : -100,
                transition: { duration: 0.5 },
              }}
            >
              <span
                class="material-symbols-outlined"
                id="icon-menu-phone-close"
              >
                close
              </span>
            </motion.div>
          </div>
        )} 
        
        
        
        
        if (menuOn == !true) {
      setMenuOn(true);
      setTimeout(() => {
        setIconOn(true);
      }, 400);
    } else {
      setMenuOn(false);
      setIconOn(false);
    }*/
