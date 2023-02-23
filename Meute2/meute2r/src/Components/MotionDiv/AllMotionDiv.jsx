import React from "react";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

export const MotionDivDown = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: "scaleY(0)",
        transformOrigin: "top left",
      }}
      animate={{
        opacity: 1,
        transform: "scaleY(1)",
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};
