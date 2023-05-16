import React from "react";
import { MotionOnePageAnimation } from "../../MotionDiv/AllMotionDiv";
import { reservArray } from "./ArrayReservation";

export const Reservation = () => {
  return <InReserv />;
};

const InReserv = () => {
  return (
    <MotionOnePageAnimation>
      <div className="reserv-container">
        <h2 className="reserv-h2">Portée Printemps</h2>
        <div className="reserv-content">
          {reservArray.map((item, index) => {
            return (
              <div key={index} className="reserv-box-content">
                <div
                  className="reserv-img"
                  style={{
                    backgroundImage: `url(${item.src})`,
                    backgroundPosition: `${item.position}`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </MotionOnePageAnimation>
  );
};

const NoReserv = () => {
  return (
    <MotionOnePageAnimation>
      <div className="reserv-container">
        <h2>Portée à venir</h2>
        <div className="reserv-line"></div>
        <div className="reserv-content">
          <p>
            Les réservation ne sont pas disponible pour le moment, pour le
            bien-être des rats,{" "}
            <span>nous laissons du temps entre chaque portée .</span>
          </p>
        </div>
      </div>
    </MotionOnePageAnimation>
  );
};
