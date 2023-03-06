import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Meute2Rats } from "../Meute2Rats";
import { Reservation } from "../AllBodys/Reservation";
import { Prices } from "../AllBodys/Prices";
import { BabiesAct } from "../AllBodys/BabiesAct";
import { About } from "../AllBodys/About";
import { OldBabies } from "../AllBodys/OldBabies";
import { AnimatePresence } from "framer-motion";
import { Header } from "../Header";

export const AnimationsRouters = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Meute2Rats />} />
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
