import "./Invest.css";
import investQr from "../../assets/invest-qr.png";
import gridImg from "../../assets/grid.png";
import homeLogo from "../../assets/logo-home.png";
import ActionsButtons from "../../components/ActionsButtons";
import { useTranslation } from "react-i18next";
import linesImg from "../../assets/invest-lines.png";
import { useHistory } from "react-router-dom";
function Invest() {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <div className="invest dd">
      <ActionsButtons path="/invest" history={history}></ActionsButtons>
      <img
        className="absolute  top-0 left-0 home-logo w-3/5 h-2/5"
        src={homeLogo}
        alt=""
      />
      <img className="invest-grid" src={gridImg} alt="" />
      <img className="invest-lines" src={linesImg} alt="" />
      <div
        className="invest-description"
        dangerouslySetInnerHTML={{ __html: t("investDescription") }}
      />
      <div
        className="invest-description-small"
        dangerouslySetInnerHTML={{ __html: t("investDescriptionSmall") }}
      />
      <img src={investQr} className="invest-qr" alt="" />
    </div>
  );
}

export default Invest;
