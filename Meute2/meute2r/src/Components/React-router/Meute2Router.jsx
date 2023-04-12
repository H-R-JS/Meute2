import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../BodyComponents/Home";
import { Reservation } from "../BodyComponents/Reserv/Reservation";
import { Prices } from "../BodyComponents/Prices";
import { BabiesAct } from "../BodyComponents/BabiesAct";
import { About } from "../BodyComponents/About";
import { OldBabies } from "../BodyComponents/OldBabies/OldBabies";
import { AnimatePresence } from "framer-motion";
import { Header } from "../HeaderComponents/Header";

export const Meute2Router = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/babiesAct" element={<BabiesAct />} />
          <Route path="/about" element={<About />} />
          <Route path="/oldBabies" element={<OldBabies />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
