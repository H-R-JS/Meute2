import React from "react";
import { motion } from "framer-motion";

const backgroundImg1 = require("../../Images/ratPro1.png");
const backgroundImg2 = require("../../Images/ratPro2.png");

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="about-container">
        <img src={backgroundImg1} className="back-img a" />
        <img src={backgroundImg2} className="back-img b" />
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
      </div>
    </motion.div>
  );
};
