import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Notice } from "./Notice/Notice";

const imgFoot = require("../../../Images/foot.png");

const imgFootArray = [
  { src: imgFoot, class: "image-foot imf4" },
  { src: imgFoot, class: "image-foot imf3" },
  { src: imgFoot, class: "image-foot imf2" },
  { src: imgFoot, class: "image-foot imf1" },
];

export const Home = () => {
  const onePageAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },

    visible: {
      display: "flex",
      opacity: 1,
      zIndex: -2,
      transition: { duration: 0.2, delay: 0.4 },
    },

    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const variantFoot = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const variFootChild = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <motion.main
      variants={onePageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="body-container"
    >
      <motion.ul
        variants={variantFoot}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {imgFootArray.map((item, index) => {
          return (
            <motion.li variants={variFootChild} key={index}>
              <img src={item.src} className={item.class} />
            </motion.li>
          );
        })}
        <motion.li variants={variFootChild}>
          <img
            src={require("../../../Images/ratAcc.jpeg")}
            alt="Photo de rat debout"
            className="image-acc"
          />
        </motion.li>
        <motion.li variants={variFootChild} className="main-content">
          <p>
            Bienvenue dans ma meute de rats, petit élevage familial <br />
            situé dans le Gers (1h de Toulouse){" "}
            <Link to="/reservation" className="underline">
              je vous propose de découvrir ma petite meute !
            </Link>
          </p>
        </motion.li>
      </motion.ul>
    </motion.main>
  );
};
