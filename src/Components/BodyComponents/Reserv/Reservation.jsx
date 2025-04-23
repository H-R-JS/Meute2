import React from "react";
import { reservArray } from "./ArrayReservation";
import { motion } from "framer-motion";

export const Reservation = () => {
  return <InReserv />;
};

const InReserv = () => {
  const onePageAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },

    visible: {
      display: "flex",
      opacity: 1,
      transition: { duration: 0.2, delay: 0.4 },
    },

    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const variReserv = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.4,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },

    exit: {
      x: -100,
      transition: { duration: 0.2 },
    },
  };

  const variReservChildren = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.main
      variants={onePageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="reserv-container"
    >
      <h2 className="reserv-h2">Portée Printemps</h2>
      <motion.section variants={variReserv} className="reserv-content">
        {reservArray.map((item, index) => {
          return (
            <motion.figure
              variants={variReservChildren}
              key={index}
              className="reserv-box-content"
            >
              <img className="reserv-img" src={item.src} />
            </motion.figure>
          );
        })}
      </motion.section>
    </motion.main>
  );
};

const NoReserv = () => {
  return (
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
  );
};
