import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useAudio from "../../components/useAudio";
import "./Industry.css";
import energyImg from "../../assets/energy.png";
import tourismImg from "../../assets/tourism.png";
import agricultureImg from "../../assets/agriculture.png";
import infrastructureImg from "../../assets/infrastructure.png";
import gridImg from "../../assets/grid.png";
import slugImg from "../../assets/logo-slug.png";
// import ActionsButtons from "../../components/ActionsButtons";
import { useTranslation } from "react-i18next";
import linesImg from "../../assets/industry-lines.png";
import energyVideoEnglish from "../../assets/energy_English.mp4";
import energyVideoFrench from "../../assets/energy_French.mp4";
import tourismVideoEnglish from "../../assets/tourism_English.mp4";
import tourismVideoFrench from "../../assets/tourism_French.mp4";
import agricultureVideoEnglish from "../../assets/agriculture_English.mp4";
import agricultureVideoFrensh from "../../assets/agriculture_French.mp4";
import infrastructureVideoEnglish from "../../assets/infrastructures_English.mp4";
import infrastructureVideoFrensh from "../../assets/infrastructures_French.mp4";
import closeImg from "../../assets/close.png";
import i18n from "i18next";
import { goTo } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Industy() {
  const dispatch = useDispatch();
  const appReducer = useSelector((state) => state.appReducer);
  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [playing, toggle] = useAudio();
  // eslint-disable-next-line no-unused-vars
  const industries = {
    energy: {
      name: "energy",
      description: "energyDescription",
      image: energyImg,
      video: i18n.language === "en" ? energyVideoEnglish : energyVideoFrench,
    },
    tourism: {
      name: "tourism",
      description: "tourismDescription",
      image: tourismImg,
      video: i18n.language === "en" ? tourismVideoEnglish : tourismVideoFrench,
    },
    infrastructure: {
      name: "infrastructure",
      description: "infrastructureDescription",
      image: infrastructureImg,
      video:
        i18n.language === "en"
          ? infrastructureVideoEnglish
          : infrastructureVideoFrensh,
    },
    agriculture: {
      name: "agriculture",
      description: "agricultureDescription",
      image: agricultureImg,
      video:
        i18n.language === "en"
          ? agricultureVideoEnglish
          : agricultureVideoFrensh,
    },
  };
  const { industryName } = useParams();
  const industry = industries[industryName];
  const [modalIsOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch(goTo(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function openModal() {
    toggle();
    setIsOpen(true);
  }
  useEffect(() => {
    const video = document.getElementById("myVideo1");
    if (modalIsOpen) {
      video.play();
    } else {
      setTimeout(() => {
        video.pause();
        video.currentTime = 0;
      }, 1000);
    }
  }, [modalIsOpen]);
  function closeModal() {
    toggle();
    setIsOpen(false);
  }
  return (
    <>
      <div
        className={`industry overflow-hidden dd ${
          appReducer.goTo !== null ? `fade-out-element anim ` : ``
        } `}
      >
        <div
          style={{
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            height: "72.5vh",
            border: "5px solid #7BF9BD",
            padding: "0px",
            marging: "0px",
            animation: "fadein 2s",
            WebkitAnimation: "fadein 2s",
            position: "fixed",
            zIndex: modalIsOpen ? 1000 : -1000,
            transition: "all 2s",
          }}
          className={`bg-gray-300 transition-all duration-2000 overflow-hidden  ${
            modalIsOpen ? `opacity-100  ` : ` opacity-0  `
          }`}
        >
          <div className="modal-container">
            <img
              src={closeImg}
              className="modal-close-btn"
              onClick={closeModal}
              alt=""
            />

            <video id="myVideo1" className=" h-full  w-full video-player  ">
              <source src={industry.video} type="video/mp4" />
            </video>
          </div>
        </div>

        <img className="logo-slug" src={slugImg} alt="" />
        <img className="industry-grid" src={gridImg} alt="" />
        <img className="industry-lines" src={linesImg} alt="" />
        <div className={"industry-title-" + industry.name + " industry-title"}>
          {t(industry.name)}
        </div>
        <img className="industry-image" src={industry.image} alt=""></img>
        <div
          className="industry-description"
          dangerouslySetInnerHTML={{ __html: t(industry.description) }}
        />
        <button
          className={
            "industry-watch-btn-" + industry.name + " industry-watch-btn"
          }
          onClick={openModal}
        >
          {i18n.language === "en" ? "WATCH THE VIDEO" : "REGARDEZ LA VIDÉO"}
        </button>
      </div>
    </>
  );
}

export default Industy;
