import React from "react";
import { motion } from "framer-motion";

const oldArray = [
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
];

export const OldBabies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, display: "none" }}
      animate={{
        opacity: 1,
        display: "block",
        transition: { duration: 0.2, delay: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <ul className="old-content">
        {oldArray.map((item) => {
          return (
            <li>
              <div className="old-text">
                {item.title}
                <span className="old-date">{item.date}</span>
              </div>
              <img src={item.img} className="old-img" />
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
