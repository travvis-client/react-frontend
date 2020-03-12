import React from "react";
import { Link, useHistory } from "react-router-dom";
import travvisLogo from "./images/loginlogo.PNG";
import '../CSS/loggedusercard.css'
export default function LoggedUserCard(props) {
  let history = useHistory();

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
    <div>
      <div className="userGreetingContainer">
        <div className="TravvislogoContainer">
          <img src={travvisLogo} className="dashBoardTravvisLogo" />
        </div>
        <div className="userInfoAndLogo">
          <div className="logoContainer">
            <img src={props.user.company_logo} className="userLogo" />
          </div>

          <div>
            <h4 className="greetingText">Hola</h4>
            <h3 className="userCompanyText">{props.user.company_name}</h3>
          </div>
        </div>
        {logout()}
      </div>
    </div>
  );
}
