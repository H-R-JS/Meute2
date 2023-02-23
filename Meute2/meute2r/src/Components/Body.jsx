import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MotionImg } from "./MotionDiv/AllMotionDiv";

const imgAcc = require("../Images/ratAcc.jpeg");
const imgFoot = require("../Images/pattes.jpeg");

export const Body = () => {
  return (
    <div className="body-page">
      <div className="body-container">
        <div className="img-content">
          <motion.img
            src={imgAcc}
            className="image-acc"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3, delay: 0.8 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            whileHover={{ transform: "translateY(-5px)" }}
          />
          <motion.img
            src={imgFoot}
            className="image-foot imf1"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.4,
              transition: { duration: 0.2, delay: 0.6 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            whileHover={{ opacity: 1 }}
          />
          <motion.img
            src={imgFoot}
            className="image-foot imf2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.4,
              transition: { duration: 0.2, delay: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            whileHover={{ opacity: 1 }}
          />
          <motion.img
            src={imgFoot}
            className="image-foot imf3"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.4,
              transition: { duration: 0.2, delay: 0.4 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            whileHover={{ opacity: 1 }}
          />
          <motion.img
            src={imgFoot}
            className="image-foot imf4"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.4,
              transition: { duration: 0.2, delay: 0.3 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        <motion.div
          className="main-content"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 1 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <p>
            Bienvenue dans <span>ma meute de rat</span>, éléveuse de ceux-ci, je
            vous propose de{" "}
            <Link to="/reservation" className="underline">
              réserver les rats qui vous plaisent !
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
