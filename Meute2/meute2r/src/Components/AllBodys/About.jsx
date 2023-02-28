import React from "react";
import { motion } from "framer-motion";

const aboutImgFoot = require("../../Images/foot.png");

export const About = () => {
  return (
    <div className="about-page">
      <motion.div
        className="back-img a"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, delay: 0.8 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      />
      <motion.img
        src={aboutImgFoot}
        className="back-img-foot foot1"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.4,
          transition: { duration: 0.2, delay: 0.6 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      />
      <motion.img
        src={aboutImgFoot}
        className="back-img-foot foot2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.4,
          transition: { duration: 0.2, delay: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      />
      <motion.img
        src={aboutImgFoot}
        className="back-img-foot foot3"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.4,
          transition: { duration: 0.2, delay: 0.4 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      />
      <motion.img
        src={aboutImgFoot}
        className="back-img-foot foot4"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.4,
          transition: { duration: 0.2, delay: 0.3 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      />
      <motion.div
        className="about-container"
        initial={{ opacity: 0, display: "none" }}
        animate={{
          opacity: 1,
          display: "block",
          transition: { duration: 0.2, delay: 1 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <div className="about-content">
          <div className="about-text">
            <p>
              Je suis éleveuse de rats depuis un bon moments, passionné par ces
              petits êtres aux regards doux et curieux. Je suis éleveuse de rats
              depuis un bon moments, passionné par ces petits êtres aux regards
              doux et curieux. Je suis éleveuse de rats depuis un bon moments,
              passionné par ces petits êtres aux regards doux et curieux. Je
              suis éleveuse de rats depuis un bon moments, passionné par ces
              petits êtres aux regards doux et curieux. Je suis éleveuse de rats
              depuis un bon moments, passionné par ces petits êtres aux regards
              doux et curieux. Je suis éleveuse de rats depuis un bon moments,
              passionné par ces petits êtres aux regards doux et curieux. Je
              suis éleveuse de rats depuis un bon moments, passionné par ces
              petits êtres aux regards doux et curieux.
              <br />
              <br />
              Je suis éleveuse de rats depuis un bon moments, passionné par ces
              petits êtres aux regards doux et curieux. Je suis éleveuse de rats
              depuis un bon moments, passionné par ces petits êtres aux regards
              doux et curieux. Je suis éleveuse de rats depuis un bon moments,
              passionné par ces petits êtres aux regards doux et curieux. Je
              suis éleveuse de rats depuis un bon moments, passionné par ces
              petits êtres aux regards doux et curieux. Je suis éleveuse de rats
              depuis un bon moments, passionné par ces petits êtres aux regards
              doux et curieux. Je suis éleveuse de rats depuis un bon moments,
              passionné par ces petits êtres aux regards doux et curieux. Je
              suis éleveuse de rats depuis un bon moments, passionné par ces
              petits êtres aux regards doux et curieux.
            </p>
          </div>
          <div className="about-parent">
            <h2 className="about-title">Les Rats reproducteurs</h2>
            <div className="about-line"></div>
            <img className="parent 1" />
            <img className="parent 2" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
