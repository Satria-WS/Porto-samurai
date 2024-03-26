import RockObsidian_left from "../assets/image/rockObsidian_left.svg";
import RockObsidian_right from "../assets/image/rockObsidian_right.svg";
import "../styles/Rock.css";

const Rock = () => {
  return (
   <>
      <div className="box-rock">
        <img className="right-rock" src={RockObsidian_right} alt=""  />
      </div>
      <div className="box-rock">
        <img className="left-rock" src={RockObsidian_left} alt="" />
      </div>
   </>

  );
};
export default Rock;
