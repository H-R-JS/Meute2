import React from "react";
import { MotionOnePageAnimation } from "../../MotionDiv/AllMotionDiv";
import { reservArray } from "./ArrayReservation";

export const Reservation = () => {
  return <InReserv />;
};

const InReserv = () => {
  return (
    <MotionOnePageAnimation>
      <main className="reserv-container">
        <h2 className="reserv-h2">Portée Printemps</h2>
        <section className="reserv-content">
          {reservArray.map((item, index) => {
            return (
              <figure key={index} className="reserv-box-content">
                <img className="reserv-img" src={item.src} />
              </figure>
            );
          })}
        </section>
      </main>
    </MotionOnePageAnimation>
  );
};

const NoReserv = () => {
  return (
    <MotionOnePageAnimation>
      <main className="reserv-container">
        <h2>Portée à venir</h2>
        <section className="reserv-content">
          <p>
            Les réservation ne sont pas disponible pour le moment, pour le
            bien-être des rats,{" "}
            <span>nous laissons du temps entre chaque portée .</span>
          </p>
        </section>
      </main>
    </MotionOnePageAnimation>
  );
};
