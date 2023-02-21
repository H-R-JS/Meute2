import "./SASS/Main.scss";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Meute2Rats } from "./Components/Meute2Rats";
import { Reservation } from "./Components/AllBodys/Reservation";
import { Prices } from "./Components/AllBodys/Prices";
import { BabiesAct } from "./Components/AllBodys/BabiesAct";
import { About } from "./Components/AllBodys/About";
import { OldBabies } from "./Components/AllBodys/OldBabies";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Meute2Rats />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/babiesAct" element={<BabiesAct />} />
        <Route path="/about" element={<About />} />
        <Route path="/oldBabies" element={<OldBabies />} />
      </Routes>
    </div>
  );
}

export default App;
