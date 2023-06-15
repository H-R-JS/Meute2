import React from "react";
import {
  DropDownNetWork,
  DropDownPortees,
} from "../../HeaderComponents/Navbar/MenuDropDown/DropDrownList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const DropDownRPhone = () => {
  return (
    <motion.ul className="dropdown-r-content-phone">
      {DropDownNetWork.map((item) => {
        return (
          <motion.li
            key={item.id}
            className={item.classLi}
            whileHover={{
              backgroundColor: "#a1875a",
              transition: { duration: 0.1 },
            }}
          >
            <Link to={item.path} className={item.class}>
              {item.title}
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export const DropDownPPhone = () => {
  return (
    <motion.ul className="dropdown-p-content-phone">
      {DropDownPortees.map((item) => {
        return (
          <motion.li
            key={item.id}
            className={item.classLi}
            whileHover={{
              backgroundColor: "#a1875a",
              transition: { duration: 0.1 },
            }}
          >
            <Link to={item.path} className={item.class}>
              {item.title}
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
