import React from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navigationbar from "../navigation";
import Support from "./support";
import HomeDisplay from "./homeDisplay";
import CreateCampaign from "./createCampaign";
import "../../CSS/dashboard.css";

export default function Dashboard(props) {
  let history = useHistory();
  const blah = () => (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        history.push("/login");
      }}
    >
      logout
    </button>
  );
  return (
    <div className="dashboardContainer">
      <Navigationbar />
      
      <div className="displayContainer">
        {blah()}
        <Switch>
          <Route path="/create-campaign" component={CreateCampaign} />
          <Route path="/support" component={Support} /> 
          <Route path="/" component={HomeDisplay} />
        </Switch>
      </div>
    </div>
  );
}
