import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/logo-dr.png";
import "./layout.css";
import Avtoria from "../../assets/avtoria.png";
import Copart from "../../assets/copart_logo.png";
import Manheim from "../../assets/manheim-logo-blue.png";
import AA from "../../assets/aa-2.png";
import LogUser from "../User/LogUser";
import { useState } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import BtnBack from "../../views/BackToTop/BtnBack";

const setActive = ({ isActive }) => (isActive ? "active-link" : "default-link");

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="container">
        <div className="top-menu">
          <NavLink to="/">
            <img src={Logo} alt="Car" />
          </NavLink>
          <nav className="nav-li">
            <ul>
              <li>
                <NavLink className={setActive} to="/stock">
                  Авто в наявності
                </NavLink>
              </li>
              {/* <li>
                <NavLink className={setActive} to="/track_vin">
                  Авто в дорозі
                </NavLink>
              </li> */}
              <li>
                <NavLink className={setActive} to="/tracking">
                  Відстежити авто
                </NavLink>
              </li>

              <li>
                <NavLink className={setActive} to="/about-us">
                  Про нас
                </NavLink>
              </li>
              <li>
                <NavLink className={setActive} to="/contacts">
                  Контакти
                </NavLink>
              </li>
              {/* <li className="main_phone">+ 38 (068) 587 88 88</li> */}
            </ul>
          </nav>
          <div className="nav-btn">
            <a href="tel:+ 38 (097) 069 7949">
              <button className="main_phone">+ 38 (097) 069 7949</button>
            </a>
            <NavLink to="/contacts">
              <button>Замовити авто</button>
            </NavLink>
            <NavLink to="/calculator">
              <button>Калькулятор</button>
            </NavLink>
            <LogUser />
            {/* <LogUser /> */}
          </div>
        </div>
      </div>

      <Outlet />

      <footer>
        <div className="container">
          <div className="info_footer">
            <div className="tools_links">
              <div className="logo_footer">
                <img src={Logo} alt="" />
                <h2 className="main_h2">Euro Car</h2>
              </div>
              <div className="another_posts_link">
                <img src={Avtoria} alt="" />
                <img src={Copart} alt="" />
                <img src={Manheim} alt="" />
                <img src={AA} alt="" />
              </div>
              <div className="nav-btn">
                <NavLink to="/contacts">
                  <button>Замовити авто</button>
                </NavLink>
                <NavLink to="/calculator">
                  <button>Калькулятор</button>
                </NavLink>
              </div>
            </div>
            <div className="info_contacts">
              <ul>
                <li>
                  Відділ продажу
                  <br />
                  <span>+38 (093) 344 1747</span>
                </li>
                <li>
                  СТО
                  <br />
                  <span>+38 (096) 234 3149</span>
                </li>
              </ul>
              <ul>
                <li>
                  Запчастини
                  <br />
                  <span>+38 (097) 452 9224</span>
                </li>
                <li>
                  Сертифікація
                  <br />
                  <span>+38 (096) 494 7237</span>
                </li>
              </ul>
            </div>
            <div className="our_mesangers">
              <h2 className="main_h2">Приєднуйся:</h2>
              <div className="icon_messengers">
                <i className="fa fa-youtube"></i>
                <i className="fa fa-telegram"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BtnBack />
    </>
  );
};

export default Layout;
