import React from "react";
import { motion } from "framer-motion";

const imgPrices = require("../../Images/ratTar.jpeg");

export const Prices = () => {
  return (
    <motion.div
      classname="prices-page"
      initial={{ opacity: 0, display: "none" }}
      animate={{
        opacity: 1,
        display: "block",
        transition: { duration: 0.2, delay: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="prices-container">
        <div className="prices-img-content">
          <img src={imgPrices} className="prices-img" />
        </div>
        <div className="prices-unit-content">
          <div className="unit 1">
            <p>Prix par raton couleur(s) classique(s):</p>
            <span>10 €</span>
          </div>

          <div className="unit 2">
            <p>Prix par raton husky et dumbo:</p>
            <span>13 €</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
