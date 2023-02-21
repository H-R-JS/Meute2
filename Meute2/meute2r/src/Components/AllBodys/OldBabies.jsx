import React from "react";

const oldArray = [
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
  {
    title: "Portée Aurore:",
    date: " 16/02/2023",
    img: require("../../Images/ratAcc.jpeg"),
  },
];

export const OldBabies = () => {
  return (
    <ul className="old-content">
      {oldArray.map((item) => {
        return (
          <li>
            <div className="old-text">
              {item.title}
              <span className="old-date">{item.date}</span>
            </div>
            <img src={item.img} className="old-img" />
          </li>
        );
      })}
    </ul>
  );
};
