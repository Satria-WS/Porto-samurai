
import "../styles/RootSvg.css";
import root_left from "../assets/image/root_left.svg";
import root_right from "../assets/image/root_right.svg";
const RootSvg = (): JSX.Element => {
  return (
    <div className="box">
      <div className="box-root">
     
        <img className="right" src={root_right}/>
      </div>
      <div className="box-root">
         <img className="left" src={root_left} alt="" /></div>
    </div>
    
  )
}
export default RootSvg