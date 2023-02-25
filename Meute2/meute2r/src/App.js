import "./SASS/Main.scss";
import { AnimationsRouters } from "./Components/React-router/AnimationsRouters";
import { Header } from "./Components/Header";
import Media from "react-media";

function App() {
  return (
    <div className="App">
      <Media query="(max-width: 1000px)">
        {(matches) => {
          return matches ? null : <Header />;
        }}
      </Media>
      <AnimationsRouters />
    </div>
  );
}

export default App;
