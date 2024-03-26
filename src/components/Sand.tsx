
import RedSand from "../assets/image/redSand.svg";
import Samurai from "../assets/image/samurai.png";
import Shrine_top from "../assets/image/shrine_top.svg";
import Shrine_bottom from "../assets/image/shrine_bottom.svg";
import "../styles/Sand.css";
const Sand = () => {
  return (
    <>
      <div className="sand-box">
        <div className="person">
          <img src={Samurai} alt="samurai-screen" />
        </div>
 
        {/* <div className="shrine">
          shrinexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div> */}
        <img className="shrine-top" src={Shrine_top} alt="shrine" />
        <img className="shrine-bottom" src={Shrine_bottom} />
        <div className="RedSand">
          <img src={RedSand} />
        </div>
      </div>
    </>
  );
};
export default Sand;
