import "./SASS/Main.scss";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Meute2Rats } from "./Components/Meute2Rats";
import { Reservation } from "./Components/AllBodys/Reservation";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Meute2Rats />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
