import "./SASS/Main.scss";
import { Meute2Router } from "./Components/React-router/Meute2Router";
import { Header } from "../src/Components/HeaderComponents/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Meute2Router />
    </div>
  );
}

export default App;
