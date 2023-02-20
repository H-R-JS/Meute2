import React from "react";
import { DropDownNetWork, DropDownPortees } from "./DropDrownList";
import { Link } from "react-router-dom";

export const DropDownR = () => {
  return (
    <ul className="dropdown-r-content">
      {DropDownNetWork.map((item) => {
        return (
          <li key={item.id} className={item.classLi}>
            <Link to={item.path} className={item.class}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const DropDownP = () => {
  return (
    <ul className="dropdown-p-content">
      {DropDownPortees.map((item) => {
        return (
          <li key={item.id} className={item.classLi}>
            <Link to={item.path} className={item.class}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
