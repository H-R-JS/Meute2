import React from "react";

const ImgArray = [
  { image: require("../../Images/parent1.jpg"), name: "lol" },
  { image: require("../../Images/parent1.jpg"), name: "mdr" },
  ,
  { image: require("../../Images/parent1.jpg"), name: "ptdr" },
  ,
  { image: require("../../Images/parent1.jpg"), name: "lul" },
];

export class Parents extends React.Component {
  renderChildrenView = (item, index) => {
    return (
      <div key={index} className="box-parent">
        <img className="img-parent" src={item.image} />
        <p>{item.name}</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <ParentRats dataArray={ImgArray}>{this.renderChildrenView}</ParentRats>
      </div>
    );
  }
}

class ParentRats extends React.Component {
  render() {
    const { dataArray } = this.props;
    return (
      <div className="all-box-parent">
        {dataArray.map((value, index) => {
          return <div key={index}>{this.props.children(value, index)}</div>;
        })}
      </div>
    );
  }
}
