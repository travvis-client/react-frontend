import React, { useState } from "react";
import "../../CSS/loginpage.css";
import { Link } from "react-router-dom";
import background from "../images/loginpagebackground.png";
import logo from "../images/loginlogo.PNG";
import googlelogo from "../images/googleLogo.svg";
import facebooklogo from "../images/facebookLogo.svg";
import axios from "axios";
import firebase, {
  auth,
  googleAuth,
  facebookAuth
} from "../configurations/firebaseConfig";
export default function LoginPage(props) {
  const [credentials, setCredentials] = useState();

  const registerData = (creds, url) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}${url}`, creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // user.login();
        props.history.push(`/`);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  console.log(credentials);
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    console.log("hello");
    registerData(credentials, "login");
  };

  const firebaseGoogle = () => {
    auth.signInWithPopup(googleAuth).then(result => {
      console.log(result);
      registerData({ email: result.user.email }, "firebase");
    });
  };

  const firebaseFacebook = () => {
    auth.signInWithPopup(facebookAuth).then(result => {
      console.log(result);
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "130%"
      }}
      className="loginPageContainerBackground"
    >
      <div className="loginPageContainer">
        <div className="formContainer">
          <div className="loginLogoContainer">
            <img src={logo} className="loginlogo" />
            <p>Ingresar a la consola de travvis</p>
          </div>
          <form className="loginForm" onSubmit={login}>
            <input
              placeholder="Correo Electrónico"
              className="FormInput"
              label="Email"
              onChange={handleChange}
              name="email"
            ></input>
            <input
              placeholder="Contraseña"
              className="FormInput"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
              name="password"
            ></input>
            <div className="loginButtonContainer">
              <div className="socialMediaButtons">
                <p>Iniciar sesión con</p>
                {/* <button className="logoButton"> */}
                <img
                  src={googlelogo}
                  className="buttonlogo"
                  onClick={() => firebaseGoogle()}
                />
                {/* </button> */}
                {/* <button className="logoButton"> */}
                <img
                  src={facebooklogo}
                  className="buttonlogo"
                  onClick={() => firebaseFacebook()}
                />
                {/* </button> */}
              </div>
              <button className="loginButton">Iniciar</button>
            </div>
          </form>
          <button className="registerButton">
            <Link to="/register" className="newAccountLink">
              Crear Cuenta
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
