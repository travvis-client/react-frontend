import React from "react";
import "../../CSS/navigation.css";
import logo from "../images/travvislogo.svg";
import { Link } from "react-router-dom";
import DescriptionIcon from "@material-ui/icons/Description";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import LinkCurve from "../images/curveend.svg";

export default function Navigation(props) {
  const location = (link, curve) => {
    if (window.location.pathname == link && !curve) {
      return "clickedLink";
    }
    if (window.location.pathname !== link && !curve) {
      return "unclickedLink";
    }
    if (window.location.pathname !== link && curve == "class") {
      return "hiddenCurve";
    }
  };
  return (
    <div className="navigationContainer">
      <div className="navigation">
        {/* <div className="navlogo"> */}
        <img src={logo} className="navlogo" />
        {/* </div> */}
        <div className="navLinksContainer">
          <img src={LinkCurve} className={`rotateCurve ${location("/", "class")}`} />
          <Link to="/" className={`navLinks ${location("/")}`}>
            <DescriptionIcon className="materialIcon" />
            INICIO
          </Link>
          <img src={LinkCurve} className={`LinkCurve ${location("/", "class")}`} />
          <img
            src={LinkCurve}
            className={`rotateCurve ${location("/create-campaign", "class")}`}
          />

          <Link
            to="/create-campaign"
            className={`navLinks ${location("/create-campaign")}`}
          >
            <StarBorderIcon className="materialIcon" />
            CREAR CAMPAÑA
          </Link>
          <img src={LinkCurve} className={`LinkCurve ${location("/create-campaign", "class")}`} />
          <img
            src={LinkCurve}
            className={`rotateCurve ${location("/support", "class")}`}
          />

          <Link to="/support" className={`navLinks ${location("/support")}`}>
            <ContactSupportIcon className="materialIcon" />
            SOPORTE
          </Link>
          <img src={LinkCurve} className={`LinkCurve ${location("/support", "class")}`} />
        </div>
      </div>
    </div>
  );
}
