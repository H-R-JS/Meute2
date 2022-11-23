import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Born } from "./Components/Born";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Born" element={<Born />} />
      </Routes>
    </div>
  );
}

export default App;
