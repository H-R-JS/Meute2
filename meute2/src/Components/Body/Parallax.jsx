import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import born1 from "../../Images/born1.jpg";

const Container = () => (
  <Parallax
    blur={0}
    className="para-background-born"
    bgImage={born1}
    strength={600}
  >
    <p>Les Naissances</p>
    <Link to="/Born">
      <button className="button-born">
        <span className="span-button">Les Petits Ratons</span>
      </button>
    </Link>
  </Parallax>
);

export default Container;
