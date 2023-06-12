import React, { useState } from "react";

export const Connect = ({
  textSub,
  setTextSub,
  submitNotice,
  connectClass,
  writeClass,
  forbidClass,
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
  const [btnSubmit, setBtnSubmit] = useState("btn-submit");
  const [result, setResult] = useState("submit-result none");

  const subAndToggle = () => {
    if (textSub !== "") {
      submitNotice();
      setBtnSubmit("btn-submit none");
      setResult("submit-result");
    } else {
      return null;
    }
  };

  return (
    <article className={writeClass}>
      <form className="text-write-submit">
        <textarea
          className="notice-input-text"
          name="notice"
          placeholder="Votre avis..."
          onChange={(e) => setTextSub(e.target.value)}
          cols="64"
          rows="6"
        ></textarea>
        <button className={btnSubmit} onClick={subAndToggle}>
          Poster
        </button>
        <span className={result}>Merci !</span>
      </form>
    </article>
  );
};

export const ForbiddenWrite = ({ forbidClass }) => {
  return (
    <article className={forbidClass}>
      <p>
        Vous avez déjà poster votre avis, une fois fait vous ne pouvez en poster
        un deuxième.
        <br />
        <span>En vous remerciant d'avoir prit le temps !</span>
      </p>
    </article>
  );
};
