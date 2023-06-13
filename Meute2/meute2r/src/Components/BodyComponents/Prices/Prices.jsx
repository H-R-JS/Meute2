import React from "react";
import { motion } from "framer-motion";

export const Prices = () => {
  const onePageAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },

    visible: {
      display: "flex",
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },

    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const variPrices1 = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      x: -100,
      transition: { duration: 0.2 },
    },
  };
  const variPrices2 = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.main
      variants={onePageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="prices-container"
    >
      <motion.figure variants={variPrices1}>
        <img
          src={require("../../../Images/ratTar.jpeg")}
          className="prices-img"
        />
      </motion.figure>
      <motion.section variants={variPrices2} className="unit-container">
        <article className="unit">
          <p>Prix par raton couleur(s) classique(s):</p>
          <span>10 €</span>
        </article>

        <article className="unit">
          <p>Prix par raton husky et dumbo:</p>
          <span>13 €</span>
        </article>
      </motion.section>
    </motion.main>
  );
};
