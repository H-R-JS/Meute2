import React from "react";
import { motion } from "framer-motion";

const imgPrices = require("../../Images/ratTar.jpeg");

export const Prices = () => {
  return (
    <div classname="prices-page">
      <div className="prices-container">
        <motion.div
          className="prices-img-content"
          initial={{
            opacity: 0,
            display: "none",
            x: -50,
          }}
          animate={{
            opacity: 1,
            display: "block",
            left: "200px",
            x: 0,
            transition: { duration: 0.2, delay: 0.5 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <img src={imgPrices} className="prices-img" />
        </motion.div>
        <motion.div
          className="prices-unit-content"
          initial={{ opacity: 0, display: "none", y: 50 }}
          animate={{
            opacity: 1,
            display: "block",
            y: 0,
            transition: { duration: 0.2, delay: 0.7 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <div className="unit 1">
            <p>Prix par raton couleur(s) classique(s):</p>
            <span>10 €</span>
          </div>

          <div className="unit 2">
            <p>Prix par raton husky et dumbo:</p>
            <span>13 €</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
