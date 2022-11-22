import React from "react";

const ImgArray = [
  { image: require("../../Images/parent1.jpg"), name: "Loulou" },
  { image: require("../../Images/parent1.jpg"), name: "Persil" },
  ,
  { image: require("../../Images/parent1.jpg"), name: "Folasse" },
  ,
  { image: require("../../Images/parent1.jpg"), name: "Bébé-Chat" },
];

export class Parents extends React.Component {
  renderChildrenView = (item, index) => {
    return (
      <div key={index} className="box-parent">
        <img className="img-parent" src={item.image} />
        <p className="name-parent">{item.name}</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <p className="parent-title">Les Parents</p>
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
          return (
            <div className="container-box-parent" key={index}>
              {this.props.children(value, index)}
            </div>
          );
        })}
      </div>
    );
  }
}
