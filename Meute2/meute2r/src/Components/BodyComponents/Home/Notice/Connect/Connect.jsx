import React from "react";

export const Connect = (setTextSub) => {
  return (
    <div className="interface-box-connect">
      <label forHtml="notice"> Écrivez votre avis</label>
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
        <button className="btn-submit">Poster</button>
      </div>
    </div>
  );
};
