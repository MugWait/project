import React from "react";
import "./signin.css";
import { NavLink } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import SignInComp from "../../components/SignIn/SignInComp";

export const setActive = ({ isActive }) =>
  isActive ? "active-link" : "default-link_log";

const SignIn = () => {
  return (
    <div className="bg_signin">
      <div className="form_signin">
        <div className="links_sing_up_in">
          <a>Вхід</a>
          <span>|</span>
          <span>
            <NavLink to="/signup" className={setActive}>
              <a>Реєстрація</a>
            </NavLink>
          </span>
        </div>
        {/* <input placeholder="Введіть логін" type="text" />
        <br />
        <input placeholder="Введіть пароль" type="password" />
        <br />

        <button>Увійти</button> */}
        <SignInComp />
        <GoogleLogin />
      </div>
    </div>
  );
};

export default SignIn;
