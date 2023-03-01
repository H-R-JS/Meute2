import "./SASS/Main.scss";
import { AnimationsRouters } from "./Components/React-router/AnimationsRouters";
import { PhoneRouter } from "./Components/React-router/PhoneRouter";
import Media from "react-media";

function App() {
  return (
    <div className="App">
      <Media query="(max-width: 1000px)">
        {(matches) => {
          return matches ? <PhoneRouter /> : <AnimationsRouters />;
        }}
      </Media>
    </div>
  );
}

export default App;
