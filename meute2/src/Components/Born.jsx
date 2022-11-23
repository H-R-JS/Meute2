import React from "react";
import { Logo } from "./Header/Title&Logo";

const BornArray = [
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
  { img: require("../Images/parent1.jpg"), bName: "nalala" },
];

export class Born extends React.Component {
  renderChildrenView = (item, index) => {
    return (
      <div>
        <div key={index}>
          <img src={item.img} />
          <p>{item.bName}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Logo />
        <div className="title-box">
          <h1>Les Naissances</h1>
        </div>
        <BornRats dataArray={BornArray}>{this.renderChildrenView}</BornRats>
      </div>
    );
  }
}

class BornRats extends React.Component {
  render() {
    const { dataArray } = this.props;
    return (
      <div>
        {dataArray.map((value, index) => {
          return <div key={index}>{this.props.children(value, index)}</div>;
        })}
      </div>
    );
  }
}
