import React from "react";
import "./index.css";
import MainCar from "../../assets/1579155590_31-39.jpg";
import ShortInfo from "../../assets/short_info_img.jpg";
import BanerCars from "../../assets/1579155590_31-39.jpg";
import { NavLink, useNavigate } from "react-router-dom";

import MultiCarousel from "../../components/MultiCarousel/MultiCarousel";

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="container">
          <header>
            <div className="left-main_menu">
              <h3>
                БУДЬ-ЯКЕ АВТО
                <br />
                ДОСТАВИМО З ЄВРОПИ “ПІД КЛЮЧ”
              </h3>
              <ul>
                <a href="#">
                  <NavLink to="/stock">
                    <li>
                      <i className="large material-icons">directions_car</i>Авто
                      в наявності
                      <i className="large material-icons">chevron_right</i>
                    </li>
                  </NavLink>
                </a>
                <a href="#">
                  <NavLink to="/tracking">
                    <li>
                      <i className="large material-icons">place</i>Відстежити
                      авто
                      <i className="large material-icons">chevron_right</i>
                    </li>
                  </NavLink>
                </a>
                <a href="#">
                  <NavLink to="/contacts">
                    <li>
                      <i className="large material-icons">monetization_on</i>
                      Вартість послуг
                      <i className="large material-icons">chevron_right</i>
                    </li>
                  </NavLink>
                </a>
                <a href="#">
                  <NavLink to="/calculator">
                    <li className="last_btn">
                      <i className="large material-icons">exposure</i>Авто
                      калькулятор
                      <i className="large material-icons">chevron_right</i>
                    </li>
                  </NavLink>
                </a>
                <a href="#">
                  <NavLink to="/contacts">
                    <li className="last_btn">
                      <i className="large material-icons">directions_car</i>
                      Підбір авто онлайн
                      <i className="large material-icons">chevron_right</i>
                    </li>
                  </NavLink>
                </a>
              </ul>
            </div>
            <img className="img_main-car" src={MainCar} />
          </header>
          <div className="contacts_header">
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
        </div>
      </section>
      <section>
        <div className="container">
          <div className="short_info">
            <div className="choose_btn-div">
              <h2>ТВОЯ МРІЯ СТАЛА ЩЕ ДОСТУПНІШОЮ!</h2>
              <p>
                АДЖЕ EURO CAR
                <br />
                ПОКРИВАЄ УВЕСЬ ДІАПАЗОН КУПІВЛІ,
                <br />
                ДОСТАВКИ ТА ОФОРМЛЕННЯ АВТО
              </p>
              <NavLink to="/contacts">
                <button>Підібрати авто в один клік</button>
              </NavLink>
            </div>
            <div className="short_info-li">
              <ul>
                <li>
                  АВТОМОБІЛІ З ЄВРОПИ
                  <span className="large material-icons">check</span>
                </li>
                <li>
                  ДОСТАВКА<span className="large material-icons">check</span>
                </li>
                <li>
                  РОЗМИТНЕННЯ<span className="large material-icons">check</span>
                </li>
                <li>
                  РЕМОНТ<span className="large material-icons">check</span>
                </li>
                <li>
                  СЕРТИФІКАЦІЯ
                  <span className="large material-icons">check</span>
                </li>
              </ul>
            </div>
            <img src={ShortInfo} alt="short_info_img" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="div_offers">
            <div className="info_offers">
              <h2 className="main_h2">
                <span>EURO CAR</span>
                <br /> НАДІЙНА ДОСТАВКА АВТО З ЄВРОПИ ТА ДОСТАВКА У ВАШЕ МІСТО
              </h2>
              <div className="blocks_offers">
                <div className="offer">
                  <h2 className="offer_h2_main">
                    КУПИТИ АВТО
                    <br />З ЄС
                  </h2>
                  <p>ЗАМОВЛЯЮЧИ АВТО ЧЕРЕЗ EURO CAR, ВИ ЕКОНОМИТЕ 25%.</p>
                  <h2>У ВАРТІСТЬ ВКЛЮЧЕНО:</h2>
                  <ul>
                    <li>- АУКЦІОННА ЦІНА АВТО</li>
                    <li>- ДОСТАВКА АВТО</li>
                    <li>- РОЗМИТНЕННЯ ТА СЕРТИФІКАЦІЯ АВТО</li>
                    <li>- РЕМОНТ АВТО ТА ХІМЧИСТКА</li>
                  </ul>
                  <NavLink to="/contacts">
                    <button>Отримати консультацію</button>
                  </NavLink>
                </div>
                <div className="offer">
                  <h2 className="offer_h2_main">
                    КУПИТИ РОЗМИТНЕНЕ
                    <br />
                    АВТО
                  </h2>
                  <p>
                    ЗПРОДАЄМО РОЗМИТНЕНІ АВТО ІЗ ЄВРОПИ ЗА ДОСТУПНИМИ ЦІНАМИ.
                  </p>
                  <h2>У ВАРТІСТЬ ВКЛЮЧЕНО:</h2>
                  <ul>
                    <li>- АУКЦІОННА ЦІНА АВТО</li>
                    <li>- ДОСТАВКА АВТО</li>
                    <li>- РОЗМИТНЕННЯ ТА СЕРТИФІКАЦІЯ АВТО</li>
                    <li>- РЕМОНТ АВТО ТА ХІМЧИСТКА</li>
                  </ul>
                  <NavLink to="/contacts">
                    <button>Отримати консультацію</button>
                  </NavLink>
                </div>
                <div className="offer">
                  <h2 className="offer_h2_main">
                    ПРОДАЙ СВОЄ АВТО З
                    <br />
                    ЄВРОПИ
                  </h2>
                  <p>У ВАС Є МОЖЛИВІСТЬ ПРОДАТИ СВОЄ ПРИВЕЗЕНЕ АВТО З ЄС</p>
                  <h2>У ВАРТІСТЬ ВКЛЮЧЕНО:</h2>
                  <ul>
                    <li>- ВАРТІСТЬ ПОЛУГ EURO CAR</li>
                    <li>- ДОСТАВКА АВТО</li>
                    <li>- РОЗМИТНЕННЯ ТА СЕРТИФІКАЦІЯ АВТО</li>
                    <li>- РЕМОНТ АВТО ТА ХІМЧИСТКА</li>
                  </ul>
                  <NavLink to="/contacts">
                    <button>Отримати консультацію</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="car_slider_box">
            <h2 className="main_h2">ОТРИМАЙ БАЖАНИЙ АВТОМОБІЛЬ В ОДИН КЛІК</h2>
            <div className="slider">
              {/* <div className="slider_btn">
                <button>
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
              </div> */}
              <MultiCarousel />
              {/* <Carousel responsive={responsive}>
                <div className="post_block">
                  <img src={BanerCars} alt="car" />
                  <h2>NISSAN QASHQAI</h2>
                  <div className="post_info">
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                  </div>
                  <div className="more_about_post">
                    <h2>9500 $</h2>
                    <button>Хочу</button>
                  </div>
                </div>
                <div className="post_block">
                  <img src={BanerCars} alt="car" />
                  <h2>NISSAN QASHQAI</h2>
                  <div className="post_info">
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                  </div>
                  <div className="more_about_post">
                    <h2>9500 $</h2>
                    <button>Хочу</button>
                  </div>
                </div>
                <div className="post_block">
                  <img src={BanerCars} alt="car" />
                  <h2>NISSAN QASHQAI</h2>
                  <div className="post_info">
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                  </div>
                  <div className="more_about_post">
                    <h2>9500 $</h2>
                    <button>Хочу</button>
                  </div>
                </div>
                <div className="post_block">
                  <img src={BanerCars} alt="car" />
                  <h2>NISSAN QASHQAI</h2>
                  <div className="post_info">
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                  </div>
                  <div className="more_about_post">
                    <h2>9500 $</h2>
                    <button>Хочу</button>
                  </div>
                </div>
                <div className="post_block">
                  <img src={BanerCars} alt="car" />
                  <h2>NISSAN QASHQAI</h2>
                  <div className="post_info">
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                    <ul>
                      <li>Двигун</li>
                      <li>Двигун</li>
                      <li>Двигун</li>
                    </ul>
                  </div>
                  <div className="more_about_post">
                    <h2>9500 $</h2>
                    <button>Хочу</button>
                  </div>
                </div>
              </Carousel> */}
              <button className="more_cars" onClick={() => navigate("/stock")}>
                Більше авто{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
