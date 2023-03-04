import React, { useState } from "react";
import { motion } from "framer-motion";
import { MotionOnePageAnimation } from "../MotionDiv/AllMotionDiv";

function InfoBox(props) {
  const { dataParent, dataMale, dataFemale } = props;
  return (
    <motion.div
      className="info-box"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div>
        <p>
          Les Parents: <br />
          <span>{dataParent}</span>
        </p>
        <p>
          Mâle: <br />
          <span>{dataMale}</span>
        </p>
        <p>
          Femelle: <br />
          <span>{dataFemale}</span>
        </p>
      </div>
    </motion.div>
  );
}

const oldArray = [
  {
    id: "1",
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
    infoBox: (
      <InfoBox dataParent="Angus et Blanche" dataMale="7" dataFemale="4" />
    ),
  },
  {
    id: "2",
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
    infoBox: <InfoBox dataParent="Toi et Moi" dataMale="4" dataFemale="5" />,
  },
  {
    id: "3",
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
    infoBox: <InfoBox dataParent="Toi et Moi" dataMale="6" dataFemale="1" />,
  },
  {
    id: "4",
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
    infoBox: <InfoBox dataParent="Toi et Moi" dataMale="2" dataFemale="3" />,
  },
  {
    id: "5",
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
    infoBox: <InfoBox dataParent="Toi et Moi" dataMale="6" dataFemale="4" />,
  },
  {
    id: "6",
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
    infoBox: <InfoBox dataParent="Toi et Moi" dataMale="8" dataFemale="3" />,
  },
];

export const OldBabies = () => {
  return (
    <MotionOnePageAnimation>
      <div className="old-page">
        <ul className="old-content">
          {oldArray.map((item) => {
            return (
              <li key={item.id} className="li-old">
                <div className="old-text">
                  {item.title}
                  <span>{item.date}</span>
                </div>
                <img src={item.img} className="old-img" />
                {item.infoBox}
              </li>
            );
          })}
        </ul>
      </div>
    </MotionOnePageAnimation>
  );
};
