import React from "react";
import { Parents } from "./Body/Parents";
import { DandB } from "./Body/Descrip&Born";

export class Body extends React.Component {
  render() {
    return (
      <div>
        <DandB />
        <Parents />
      </div>
    );
  }
}
