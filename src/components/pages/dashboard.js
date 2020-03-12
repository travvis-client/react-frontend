import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Navigationbar from "../navigation";
import Support from "./support";
import HomeDisplay from "./homeDisplay";
import CreateCampaign from "./createCampaign";
import "../../CSS/dashboard.css";
import axios from "axios";
import axiosWithAuth from "../configurations/axiosConfig";

export default function Dashboard(props) {
  const [campaigns, setCampaigns] = useState("");
  const [user, setUser] = useState("");
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}campaigns`)
      .then(res => {
        console.log(res.data);
        setCampaigns(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    axiosWithAuth()
      .get(`${process.env.REACT_APP_API_URL}users/`)
      .then(res => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="dashboardContainer">
      <Navigationbar />

      <div className="displayContainer">
        <Switch>
          <Route path="/create-campaign" component={CreateCampaign} />
          <Route path="/support" component={Support} />
          <Route
            path="/"
            component={() => <HomeDisplay campaigns={campaigns} user={user} />}
          />
        </Switch>
      </div>
    </div>
  );
}
