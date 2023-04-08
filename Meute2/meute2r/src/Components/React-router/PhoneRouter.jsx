import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageMenuPhone } from "../ComponentsPhone/HeaderPhone";
import { PhoneMenu } from "../ComponentsPhone/NavPhone/PhoneMenu";
import { Reservation } from "../BodyComponents/Reserv/Reservation";
import { Prices } from "../BodyComponents/Prices";
import { BabiesAct } from "../BodyComponents/BabiesAct";
import { About } from "../BodyComponents/About";
import { OldBabies } from "../BodyComponents/OldBabies/OldBabies";
import { AnimatePresence } from "framer-motion";

export const PhoneRouter = () => {
  const location = useLocation();
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
