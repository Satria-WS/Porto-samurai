import Navbar from "../components/Navbar";
import RootSvg from "../components/RootSvg";
import gitIcon from "../assets/image/logo_github.svg";
import instaIcon from "../assets/image/logo_instagram.svg";
import linkinIcon from "../assets/image/logo_Lin.svg";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <main className="main-home">
        <RootSvg />
        <Navbar />
        <div className="content">
          <aside className="sidebar-social">
            <a className="sidebar-link">
              <img src={gitIcon} alt="github" />
            </a>
            <a className="sidebar-link">
              <img src={instaIcon} alt="instagram" />
            </a>
            <a className="sidebar-link">
              <img src={linkinIcon} alt="linkin" />
            </a>
          </aside>
          <section className="section-content">
            <div className="box">
              <div className="ellipse"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Home;
