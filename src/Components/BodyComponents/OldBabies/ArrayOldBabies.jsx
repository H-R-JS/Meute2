import React from "react";

function InfoBox(props) {
  const { dataParent, dataMale, dataFemale } = props;
  return (
    <article>
      <p>
        Les Parents: <br />
        <span>{dataParent}</span>
      </p>
      <p>
        Mâle: <br />
        <span>{dataMale}</span>
      </p>
      <p>
        Femelle: <br />
        <span>{dataFemale}</span>
      </p>
    </article>
  );
}

export const oldArray = [
  {
    id: "1",
    title: "Portée Antérieur:",
    date: " 11/12/2022",
    img: require("../ImgRAA/M_arch_1.jpg"),
    infoBox: (
      <InfoBox dataParent="Angus et Blanche" dataMale="4" dataFemale="3" />
    ),
  },
];
