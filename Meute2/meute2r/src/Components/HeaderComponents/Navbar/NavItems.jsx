import React from "react";
import Media from "react-media";

const media1000 = window.matchMedia("(max-width: 1000px)");
export const Version = media1000.matches ? "/phone/" : "/";

console.log(Version, media1000);

export const NavItems = [
  {
    title: "Réservation",
    path: Version + "reservation",
    class: "item-nav",
    id: "1",
  },
  {
    title: "Réseaux",
    path: "",
    class: "item-nav g",
    id: "2",
  },
  {
    title: "Tarifs",
    path: Version + "prices",
    class: "item-nav",
    id: "3",
  },

  {
    title: "Portées",
    path: "",
    class: "item-nav g",
    id: "4",
  },

  {
    title: "À propos",
    path: Version + "about",
    class: "item-nav",
    id: "5",
  },
];
