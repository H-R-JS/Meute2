import React, { useState } from "react";
import { auth } from "../../../../../FirebaseConfig/Config";

export const Connect = ({
  textSub,
  setTextSub,
  submitNotice,
  connectClass,
  writeClass,
  forbidClass,
  noticeList,
}) => {
  return (
    <div className={connectClass}>
      <WriteNotice {...{ textSub, setTextSub, submitNotice, writeClass }} />
      <ForbiddenWrite {...{ forbidClass }} />
    </div>
  );
};

export const WriteNotice = ({
  textSub,
  setTextSub,
  submitNotice,
  writeClass,
}) => {
  return (
    <div
      className={writeClass}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label htmlFor="notice"> Écrivez votre avis</label>
      <div className="text-write-submit">
        <textarea
          className="notice-input-text"
          name="notice"
          placeholder="Votre avis..."
          onChange={(e) => setTextSub(e.target.value)}
          max-rows="5"
          cols="64"
          rows="6"
        ></textarea>
        <button className="btn-submit" onClick={submitNotice}>
          Poster
        </button>
        {textSub}
      </div>
    </div>
  );
};

export const ForbiddenWrite = ({ forbidClass }) => {
  return (
    <div className={forbidClass}>
      <p>
        Vous avez déjà poster votre avis, une fois fait vous ne pouvez en poster
        un deuxième.
        <br />
        <span>En vous remerciant d'avoir prit le temps !</span>
      </p>
    </div>
  );
};
