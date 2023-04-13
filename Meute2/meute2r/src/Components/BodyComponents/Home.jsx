import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MotionOnePageAnimation } from "../MotionDiv/AllMotionDiv";

const imgFoot = require("../../Images/foot.png");

const imgFootArray = [
  { src: imgFoot, class: "image-foot imf4" },
  { src: imgFoot, class: "image-foot imf3" },
  { src: imgFoot, class: "image-foot imf2" },
  { src: imgFoot, class: "image-foot imf1" },
];

export const Home = () => {
  const varianttest = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemo = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <MotionOnePageAnimation>
      <div className="body-container">
        <motion.ul variants={varianttest} initial="hidden" animate="visible">
          {imgFootArray.map((item, index) => {
            return (
              <motion.li variants={itemo} key={index}>
                <img src={item.src} className={item.class} />
              </motion.li>
            );
          })}
          <motion.li variants={itemo}>
            <div className="image-acc" />
          </motion.li>
          <motion.li variants={itemo} className="main-content">
            <p>
              Bienvenue dans <span>ma meute de rat</span>, éléveuse de ces
              petits rongeurs, je vous propose de{" "}
              <Link to="/reservation" className="underline">
                réserver les rats qui vous plaisent !
              </Link>
            </p>
          </motion.li>
        </motion.ul>
      </div>
    </MotionOnePageAnimation>
  );
};
