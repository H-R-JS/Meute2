import React from "react";
import { MotionOnePageAnimation } from "../../MotionDiv/AllMotionDiv";
import { reservArray } from "./ArrayReservation";

export const Reservation = () => {
  return (
    <MotionOnePageAnimation>
      <div className="reserv-container">
        <h2>Portée Aurore</h2>
        <div className="reserv-line"></div>
        <div className="reserv-content">
          {reservArray.map((item, index) => {
            return (
              <div key={index} className="reserv-box-content">
                <div
                  className="reserv-img"
                  style={{ backgroundImage: `url(${item})` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </MotionOnePageAnimation>
  );
};
