import "./SASS/Main.scss";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Meute2Rats } from "./Components/Meute2Rats";
import { Reservation } from "./Components/AllBodys/Reservation";
import { Prices } from "./Components/AllBodys/Prices";
import { BabiesAct } from "./Components/AllBodys/BabiesAct";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Meute2Rats />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/BabiesAct" element={<BabiesAct />} />
      </Routes>
    </div>
  );
}

export default App;
