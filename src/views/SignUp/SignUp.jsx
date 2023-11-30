import React from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { setActive } from "../SignIn/SignIn";
import SignUpComp from "../../components/SignUp/SignUpComp";

const SignUp = () => {
  return (
    <div className="bg_signup">
      <div className="form_signup">
        <div className="links_sing_up_in">
          <span>
            <NavLink to="/signin" className={setActive}>
              <a>Вхід</a>
            </NavLink>
          </span>
          <span>|</span>
          <a>Реєстрація</a>
        </div>

        <SignUpComp />
      </div>
    </div>
  );
};

export default SignUp;
