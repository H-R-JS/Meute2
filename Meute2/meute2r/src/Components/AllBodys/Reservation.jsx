import React from "react";
import { motion } from "framer-motion";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.5 } }}
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
