import React from "react";

const image = require("../../Images/logo.jpg");

export class Title extends React.Component {
  render() {
    return (
      <div className="header-section">
        <Logo />
        <div className="title-section">
          <div className="title-box">
            <h1>Meute2Rats</h1>
          </div>
          <div className="under-title">
            <p>Elevage de rats situé dans le gers vers Lombez</p>
          </div>
        </div>
      </div>
    );
  }
}

export class Logo extends React.Component {
  render() {
    return (
      <div className="logo-section">
        <img className="logo" src={image} />
      </div>
    );
  }
}
