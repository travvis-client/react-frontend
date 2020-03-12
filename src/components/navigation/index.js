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
    if (window.location.pathname === link && !curve) {
      return "clickedLink";
    }
    if (window.location.pathname !== link && !curve) {
      return "unclickedLink";
    }
    if (window.location.pathname !== link && curve == "class") {
      return "hiddenCurve";
    }
  };

  const navOptions = (navTitle, link, icon) => {
    return (
      <div styles={{ display: "flex" }} className="navOption">
        <img
          src={LinkCurve}
          className={`rotateCurve ${location(link, "class")}`}
        />
        <Link to={link} className={`navLinks ${location(link)}`}>
          {icon}
          {navTitle}
        </Link>
        <img
          src={LinkCurve}
          className={`LinkCurve ${location(link, "class")}`}
        />
      </div>
    );
  };
  return (
    <div className="navigationContainer">
      <div className="navigation">
        {/* <div className="navlogo"> */}
        <img src={logo} className="navlogo" />
        {/* </div> */}
        <div className="navLinksContainer">
          {navOptions(
            "INICIO",
            "/",
            <DescriptionIcon className="materialIcon" />
          )}
          {navOptions(
            "CREAR CAMPAÑA",
            "/create-campaign",
            <StarBorderIcon className="materialIcon" />
          )}
          {navOptions(
            "SOPORTE",
            "/support",
            <ContactSupportIcon className="materialIcon" />
          )}
        </div>
      </div>
    </div>
  );
}
