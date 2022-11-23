import React from "react";
import { Header } from "./Header";
import { Body } from "./Body";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
