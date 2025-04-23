import React from "react";
import { DropDownNetWork, DropDownPortees } from "./DropDrownList";
import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";

export const DropDownR = () => {
  const variDrop = {
    hidden: { scaleY: 0 },
    hover: { scaleY: 1, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  return (
    <motion.ul
      variants={variDrop}
      initial="hidden"
      animate="hover"
      className="dropdown-r-content"
    >
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

export const DropDownP = () => {
  const variDrop = {
    hidden: { scaleY: 0 },
    hover: { scaleY: 1, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  return (
    <motion.ul
      variants={variDrop}
      initial="hidden"
      animate="hover"
      className="dropdown-p-content"
    >
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
