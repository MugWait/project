import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseConf/Supabase";
import Avatar from "../../assets/avatar.png";

// export let userSignIn = false;

const LogUser = () => {
  // const LogUser = () => {
  const [userSignIn, setUserSignIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [loginEvent, setLoginEvent] = useState("");
  // console.log(userSignIn);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      // console.log(event, session);

      setUserInfo(session?.user.user_metadata);
      setLoginEvent(event);
      if (loginEvent !== "SIGNED_OUT") {
        // console.log(loginEvent);
        // console.log("loginEvent");
        setUserSignIn(true);
      }

      if (session === null) {
        setUserSignIn(false);
      }
    });
  }, []);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
    setUserSignIn(false);
  }
  // console.log(userInfo?.avatar_url);
  return (
    <>
      {userSignIn ? (
        <ul className="topmenu">
          <li>
            <NavLink className="submenu-link" to="/profile">
              {userInfo?.avatar_url !== undefined ? (
                <img
                  className="user_index_logo"
                  src={userInfo?.avatar_url}
                  alt=""
                />
              ) : (
                <img className="user_index_logo" src={Avatar} alt="" />
              )}
            </NavLink>
            <ul className="submenu">
              <li>
                <NavLink to="/profile">Профіль</NavLink>
                {/* <a href="">Профіль</a> */}
              </li>
              <li>
                <a href="#">Налаштування</a>
              </li>
              <li>
                <a href="#" onClick={() => signOut()}>
                  Вихід
                </a>
              </li>
            </ul>
          </li>
        </ul>
      ) : (
        <NavLink to="/signin">
          <button className="btn-login">Увійти</button>
        </NavLink>
      )}
    </>
  );
};

export default LogUser;
