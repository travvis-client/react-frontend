import React from "react";
import "./CSS/App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/protectedRoutes/PrivateRoute";
import LoginPage from "./components/pages/loginPage";
import Dashboard from "./components/pages/dashboard";
import RegisterPage from "./components/pages/registerPage.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/" component={() => <Dashboard />} />
      </Switch>
    </div>
  );
}

export default App;
