import React from "react";
import { DropDownNetWork, DropDownPortees } from "./DropDrownList";
import { Link } from "react-router-dom";
import { MotionDivDown } from "../MotionDiv/AllMotionDiv";
import { motion } from "framer-motion";

export const DropDownR = () => {
  return (
    <ul className="dropdown-r-content">
      <MotionDivDown>
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
      </MotionDivDown>
    </ul>
  );
};

export const DropDownP = () => {
  return (
    <div>
      <ul className="dropdown-p-content">
        <MotionDivDown>
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
        </MotionDivDown>
      </ul>
    </div>
  );
};
