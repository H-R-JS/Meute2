import React from "react";
import { MotionOnePageAnimation } from "../../MotionDiv/AllMotionDiv";
import { oldArray } from "./ArrayOldBabies";

export const OldBabies = () => {
  return (
    <MotionOnePageAnimation>
      <ul className="old-content">
        {oldArray.map((item) => {
          return (
            <li key={item.id} className="li-old">
              <div className="old-text">
                {item.title}
                <span>{item.date}</span>
              </div>
              <div
                className="old-img"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              {item.infoBox}
            </li>
          );
        })}
      </ul>
    </MotionOnePageAnimation>
  );
};
