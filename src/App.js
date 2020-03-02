import React from "react";
import "./CSS/App.css";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/protectedRoutes/PrivateRoute";
import LoginPage from "./components/pages/loginPage";
import Dashboard from "./components/pages/dashboard";
import RegisterPage from "./components/pages/registerPage.js";

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <PrivateRoute exact path="/" component={() => <Dashboard />} />
    </div>
  );
}

export default App;
