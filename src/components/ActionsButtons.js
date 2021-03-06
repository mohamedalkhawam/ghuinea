import backImage from "../assets/back.png";
import investImage from "../assets/invest1.png";
import houseImage from "../assets/house.png";
import useAudio from "./useAudio";
import { goTo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
const ActionsButtons = ({ path, history }) => {
  const appReducer = useSelector((state) => state.appReducer);
  // eslint-disable-next-line no-unused-vars
  const [currentPath, setPath] = useState(path);
  useEffect(() => {
    setPath(path);
  }, [path]);
  const [playing, toggle] = useAudio();
  const dispatch = useDispatch();
  const showInvesBtn = () => {
    if (path !== "/invest")
      return (
        <div
          onClick={() => {
            dispatch(goTo("/invest/"));
            // toggle();
            setTimeout(() => {
              history.push("/invest/");
            }, 200);
          }}
        >
          <img className="invest-btn" src={investImage} alt="" />
          {/*<img className="invest-btn2" src={investImage2}/>*/}
          <div className="invest-btn2">
            READY TO <div className="invest-btn3">INVEST</div>
          </div>
        </div>
      );
    return null;
  };

  if (path !== "/") {
    return (
      <div>
        <div
          onClick={() => {
            dispatch(goTo("back"));
            // toggle();
            setTimeout(() => {
              history.goBack();
            }, 200);
          }}
        >
          <img className="back-btn" src={backImage} alt="" />
        </div>

        {showInvesBtn()}
        <div
          onClick={() => {
            // toggle();
            dispatch(goTo("/"));
            setTimeout(() => {
              history.push("/");
            }, 200);
          }}
        >
          <img className="home-btn" src={houseImage} alt="" />
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default ActionsButtons;
