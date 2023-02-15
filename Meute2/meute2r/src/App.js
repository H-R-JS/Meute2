import "./SASS/Main.scss";
import { Routes, Route } from "react-router-dom";
import { Meute2Rats } from "./Components/Meute2Rats";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Meute2Rats />} />
      </Routes>
    </div>
  );
}

export default App;
