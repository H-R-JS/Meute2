import React from "react";

export const NotConnect = ({ logWithGoogle, display }) => {
  return (
    <article>
      <div className={display}>
        <button onClick={logWithGoogle} className="btn-connect">
          Se connecter
        </button>
      </div>
    </article>
  );
};
