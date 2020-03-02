import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import background from "../images/registerpagebackground.png";
import logo from "../images/loginlogo.PNG";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function RegisterPage(props) {
  const [credentials, setCredentials] = useState();
  let history = useHistory();
  const registerData = creds => {
    axios
      .post(`${process.env.REACT_APP_API_URL}register`, creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // user.login();
        props.history.push(`/login`);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    console.log("hello");
    registerData(credentials);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 120%",
        backgroundPosition: "50% 200px"
      }}
      className="loginPageContainerBackground"
    >
      <div className="loginPageContainer">
        <div className="formContainer">
          <div className="loginLogoContainer">
            <img src={logo} className="loginlogo" />
            <p>Registrarse en travvis</p>
          </div>
          <form className="loginForm" onSubmit={login}>
            <input
              placeholder="Correo Electrónico"
              label="Email"
              onChange={handleChange}
              name="email"
            ></input>
            <input
              placeholder="Contraseña"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
              name="password"
            ></input>
            <input
              placeholder="Nombre de la empresa"
              className="FormInput"
              label="company_name"
              onChange={handleChange}
              name="company_name"
            ></input>
            <div className="loginButtonContainer">
              <ArrowBackIcon
                style={{ color: "#ff4365", cursor: "pointer" }}
                onClick={() => {
                  history.push("/login");
                }}
              />
              <button className="loginButton" style={{ padding: "5px" }}>
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
