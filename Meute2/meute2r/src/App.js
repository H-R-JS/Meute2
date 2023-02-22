import "./SASS/Main.scss";
import { AnimationsRouters } from "./Components/React-router/AnimationsRouters";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AnimationsRouters />
    </div>
  );
}

export default App;
