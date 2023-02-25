import React from "react";
import { Body } from "./Body";
import { MenuPhone } from "./ComponentsPhone/MenuPhone";
import Media from "react-media";

export const Meute2Rats = () => {
  return (
    <div>
      <Media query="(max-width: 1000px)">
        {(matches) => {
          return matches ? <MenuPhone /> : <Body />;
        }}
      </Media>
      ;
    </div>
  );
};
