import React, { useState, useEffect } from "react";
import CampaignCarousel from "../campaignCarousel.js";
import "../../CSS/homepage.css";
import { Link, useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CachedIcon from "@material-ui/icons/Cached";
import travvisLogo from "../images/loginlogo.PNG";
import LoggedUserCard from "../loggedUserCard";

export default function HomeDisplay(props) {
  const [order, setOrder] = useState("Latest");
  const [anchorEl, setAnchorEl] = useState(null);
  let history = useHistory();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const OrderOptions = choice => {
    setOrder(choice);
    handleClose();
  };

  const logout = () => (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        history.push("/login");
      }}
      className="logoutButton"
    >
      Cerrar sesion
    </button>
  );

  return (
    <div className="homepageContainer">
      <div className="leftSideContent">
        <input className="campaignSearchInput"></input>
        <div className="headerContainer">
          <h1>Campañas Activas</h1>

          <div className="infoAndOrder">
            <div className="campaignCount">
              <p className="campaignCountRes">{props.campaigns.length}</p>
              <p className="infoAndOrderText"> Campañas</p>
            </div>
            <div className="campaignOrder">
              <p className="infoAndOrderText">Ordenado por:</p>
              <div>
                <button className="campaignOrderButton" onClick={handleClick}>
                  {order}
                  <ExpandMoreIcon style={{ marginTop: "-2", padding: "0px" }} />
                </button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => OrderOptions("Latest")}>
                    Latest
                  </MenuItem>
                  <MenuItem onClick={() => OrderOptions("Oldest")}>
                    Oldest
                  </MenuItem>
                  <MenuItem onClick={() => OrderOptions("Favorites")}>
                    Favorites
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>

          
        </div>
        <CampaignCarousel campaigns={props.campaigns} />
        <Link className="viewAllCampaigns">
          <CachedIcon /> Ver Mas
        </Link>
      </div>
      <LoggedUserCard user={props.user} />
    </div>
  );
}
