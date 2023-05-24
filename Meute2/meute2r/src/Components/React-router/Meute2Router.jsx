import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../BodyComponents/Home/Home";
import { Reservation } from "../BodyComponents/Reserv/Reservation";
import { Prices } from "../BodyComponents/Prices/Prices";
import { BabiesAct } from "../BodyComponents/BabiesAct/BabiesAct";
import { About } from "../BodyComponents/About/About";
import { OldBabies } from "../BodyComponents/OldBabies/OldBabies";
import { AnimatePresence } from "framer-motion";
import { NoticePage } from "../BodyComponents/Home/Notice/NoticePage";

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
          <Route path="/notice" element={<NoticePage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
