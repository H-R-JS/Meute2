import React from "react";
import { Link } from "react-router-dom";

export class DandB extends React.Component {
  render() {
    return (
      <div className="all-section-DandB">
        <div className="descprit-text">
          <p>
            Je suis éleveuse de rats et passionné,Je suis élveuse de rats et
            passionné,Je suis élveuse de rats et passionné,Je suis élveuse de
            rats et passionné,Je suis élveuse de rats et passionné,Je suis
            élveuse de rats et passionné,Je suis élveuse de rats et passionné,Je
            suis élveuse de rats et passionné,Je suis élveuse de rats et
            passionné,Je suis élveuse de rats et passionné,
          </p>
        </div>
        <div className="box-born">
          <p>Les Naissances</p>
          <Link to="/Born">
            <button className="button-born">
              <span className="span-button">Les Petits Ratons</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
