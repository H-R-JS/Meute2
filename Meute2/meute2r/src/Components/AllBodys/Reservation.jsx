import React from "react";
import { motion } from "framer-motion";
import { IconMenu } from "../ComponentsPhone/NavPhone/IconMenu";
import { NavbarPhone } from "../ComponentsPhone/NavPhone/NavbarPhone";
import Media from "react-media";

const reservArray = [
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
];

export const Reservation = () => {
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
      <div className="reserv-container">
        <h2>Portée Aurore</h2>
        <div className="reserv-line"></div>
        <div className="reserv-content">
          {reservArray.map((content, index) => {
            return (
              <div key={index} className="reserv-box-content">
                <img src={content} className="reserv-img" />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
