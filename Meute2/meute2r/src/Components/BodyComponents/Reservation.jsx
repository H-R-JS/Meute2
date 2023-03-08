import React from "react";
import { MotionOnePageAnimation } from "../MotionDiv/AllMotionDiv";

const reservArray = [
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
  require("../../Images/ratAcc.jpeg"),
];

export const Reservation = () => {
  return (
    <MotionOnePageAnimation>
      <div className="reserv-container">
        <h2>Portée Aurore</h2>
        <div className="reserv-line"></div>
        <div className="reserv-content">
          {reservArray.map((content, index) => {
            return (
              <div key={index} className="reserv-box-content">
                <img src={content} className="reserv-img" />
              </div>
            );
          })}
        </div>
      </div>
    </MotionOnePageAnimation>
  );
};
