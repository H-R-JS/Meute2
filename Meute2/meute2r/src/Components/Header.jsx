import React from "react";

export const Header = () => {
  return (
    <div className="header-page">
      <div className="header-title">
        <h1>Meute2Rats</h1>
        <div className="header-line"></div>
      </div>
      <div className="menu">
        <div className="menu-content">
          <a>Réservation</a>
          <a>Réseaux</a>
          <a>Tarifs</a>
          <a>Portée</a>
          <a>À propos</a>
        </div>
      </div>
    </div>
  );
};
