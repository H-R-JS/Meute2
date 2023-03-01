import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageMenuPhone } from "../ComponentsPhone/PageMenuPhone";
import { PhoneMenu } from "../ComponentsPhone/NavPhone/PhoneMenu";
import { Reservation } from "../AllBodys/Reservation";
import { Prices } from "../AllBodys/Prices";
import { BabiesAct } from "../AllBodys/BabiesAct";
import { About } from "../AllBodys/About";
import { OldBabies } from "../AllBodys/OldBabies";
import { AnimatePresence } from "framer-motion";

export const PhoneRouter = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageMenuPhone />} />
          <Route path="/phone/" element={<PhoneMenu />}>
            <Route path="/phone/reservation" element={<Reservation />} />
            <Route path="/phone/prices" element={<Prices />} />
            <Route path="/phone/babiesAct" element={<BabiesAct />} />
            <Route path="/phone/about" element={<About />} />
            <Route path="/phone/oldBabies" element={<OldBabies />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};
