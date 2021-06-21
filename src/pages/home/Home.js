import "./Home.css";
import { useHistory } from "react-router-dom";
import homeLogo from "../../assets/logo-home.png";
import gridImg from "../../assets/grid.png";
import { useTranslation } from "react-i18next";
import useAudio from "../../components/useAudio";
function Home() {
  let history = useHistory();
  let { i18n } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [playing, toggle] = useAudio();

  const gotTo = (path, lng) => {
    i18n.changeLanguage(lng || "en");
    history.push(path);
  };

  return (
    <div className="home w-screen h-screen overflow-hidden  dd" id="ra">
      <img
        className="absolute  top-0 left-0 home-logo w-3/5 h-2/5"
        alt=""
        src={homeLogo}
      />
      <img className="home-grid  " src={gridImg} alt="" />
      <div className="home-description  ">
        <div className="home-description-item ">INVESTMENT</div>
        <div className="home-description-item-small">OPPORTUNITIES</div>
        <div className="home-description-item-fr">INVESTMENT</div>
        <div className="home-description-item-small-fr">OPPORTUNITIES</div>
      </div>
      <div className="home-buttons">
        {/*<Link to="/about?lng=en">*/}
        <button
          className="home-lang-button font-thin px-14 py-4"
          onClick={() => {
            toggle();
            setTimeout(() => {
              gotTo("/about", "en");
            }, 1);
          }}
        >
          ENGLISH
        </button>
        {/*</Link>*/}
        {/*<Link to="/about?lng=fr">*/}
        <button
          className=" home-lang-button-fr font-thin px-14 py-4"
          onClick={() => {
            toggle();
            setTimeout(() => {
              gotTo("/about", "fr");
            }, 1);
          }}
        >
          FRANÇAIS
        </button>
        {/*</Link>*/}
      </div>
    </div>
  );
}

export default Home;
