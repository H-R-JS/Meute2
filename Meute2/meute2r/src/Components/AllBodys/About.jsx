import React from "react";

const backgroundImg1 = require("../../Images/ratPro1.png");
const backgroundImg2 = require("../../Images/ratPro2.png");

export const About = () => {
  return (
    <div>
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
    </div>
  );
};
