import React from "react";
import { motion } from "framer-motion";

const downMenuAnimation = {
  noOpen: {
    opacity: 0,
    transform: "scaleY(0)",
    transformOrigin: "top left",
  },
  open: {
    opacity: 1,
    transform: "scaleY(1)",
    transition: { duration: 0.2 },
  },
};

export const MotionDivDown = ({ children }) => {
  return (
    <motion.div variants={downMenuAnimation} initial="noOpen" animate="open">
      {children}
    </motion.div>
  );
};

const footandRatAnimation = {
  hidden: {
    opacity: 0,
    display: "none",
  },
  visible: {
    display: "inline-block",
    opacity: 1,
  },
};

export const MotionFootandRatPage = ({ children }) => {
  return (
    <motion.div
      variants={footandRatAnimation}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

const onePageAnimation = {
  out: {
    display: "none",
    opacity: 0,
  },

  open: {
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

export const MotionOnePageAnimation = ({ children }) => {
  return (
    <motion.div
      variants={onePageAnimation}
      initial="out"
      animate="open"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const multipleAnimationImg = {
  imgOut: {
    opacity: 0,
    display: "none",
    x: -50,
  },
  imgOpen: {
    opacity: 1,
    display: "inline-block",
    left: "200px",
    x: 0,
    zIndex: -2,
    transition: { duration: 0.3, delay: 0.6, timingFunction: "ease-out" },
  },

  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const MotionMultipleAnimationImg = ({ children }) => {
  return (
    <motion.div
      variants={multipleAnimationImg}
      initial="imgOut"
      animate="imgOpen"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const multipleAnimationText = {
  textOut: {
    opacity: 0,
    display: "none",
    y: 50,
  },
  textOpen: {
    opacity: 1,
    display: "inline-block",
    y: 0,
    zIndex: -2,
    transition: { duration: 0.5, delay: 0.8, timingFunction: "ease-out" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const MotionMultipleAnimationText = ({ children }) => {
  return (
    <motion.div
      variants={multipleAnimationText}
      initial="textOut"
      animate="textOpen"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
