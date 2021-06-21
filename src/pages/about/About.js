import { useHistory } from "react-router-dom";
import "./About.css";
import gridImg from "../../assets/grid.png";
import slugImg from "../../assets/logo-slug.png";
import ActionsButtons from "../../components/ActionsButtons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import useAudio from "../../components/useAudio";
import { goTo } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function About() {
  const dispatch = useDispatch();
  const appReducer = useSelector((state) => state.appReducer);

  useEffect(() => {
    dispatch(goTo(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const clickEvent = (route) => {
    toggle();
    dispatch(goTo("industry"));
    setTimeout(() => {
      history.push(route);
    }, 200);
  };

  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [playing, toggle] = useAudio();
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`about overflow-hidden dd ${
          appReducer.goTo !== null ? `fade-out-element anim ` : ``
        } `}
      >
        <ActionsButtons path="/about" history={history}></ActionsButtons>
        <img className="about-grid w-28 top-10" src={gridImg} alt="" />
        <img className="logo-slug" src={slugImg} alt="" />
        <div
          className={`about-description  `}
          dangerouslySetInnerHTML={{ __html: t("aboutDescription") }}
        />

        <button
          onClick={() => clickEvent("industry/tourism")}
          className="about-industry-btn tourism-btn flex justify-center items-center"
        >
          {t("tourism")}
        </button>
        <button
          onClick={() => clickEvent("industry/energy")}
          className="about-industry-btn energy-btn"
        >
          {t("energy")}
        </button>
        <button
          onClick={() => clickEvent("industry/infrastructure")}
          className="about-industry-btn infra-btn"
        >
          {t("infrastructure")}
        </button>
        <button
          onClick={() => clickEvent("industry/agriculture")}
          className="about-industry-btn agriculture-btn"
        >
          {t("agriculture")}
        </button>
      </div>
    </>
  );
}

export default About;
