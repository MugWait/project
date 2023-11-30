import React, { useEffect, useState } from "react";
import "./about_car.css";
import { useNavigate, useParams } from "react-router-dom";
import Road from "../../assets/road-icon-gray.svg";
import Clock from "../../assets/clock-icon-gray.svg";
import Engine from "../../assets/engine-icon-gray.svg";
import Gasoline from "../../assets/gasoline-icon-gray.svg";
import Transmission from "../../assets/transmission-icon-gray.svg";
import Wheel from "../../assets/wheel-drive-icon-gray.svg";
import { supabase } from "../../components/SupabaseConf/Supabase";

const AboutCar = () => {
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(params.carId);

  const [getAboutInfo, setGetAboutInfo] = useState([]);

  // console.log(getAboutInfo);

  const [carsInfoAbout, setCarsInfoAbout] = useState([]);

  //   console.log(carsInfoVIN);

  async function getCars() {
    const { data: cars } = await supabase.from("cars").select("*");
    setCarsInfoAbout(cars);
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();
  }

  async function getVINCar() {
    let Vin = await carsInfoAbout.filter(function (res) {
      return res.id == params.carId;
    });
    setGetAboutInfo(Vin);
  }

  useEffect(() => {
    getCars();
    getVINCar();
  }, [carsInfoAbout]);

  return (
    <>
      {getAboutInfo.map((resCar) => (
        <>
          <div className="container" key={resCar.id}>
            <div className="description_car">
              <div className="photos_car">
                <img src={resCar.img_link} alt="camaro" />
                <br />
              </div>
              <div className="text_car">
                <h1>
                  {resCar.brand} {resCar.model}
                </h1>
                <h2>{resCar.car_price} $</h2>
                <hr />
                <ul>
                  <li>
                    <img src={Road} alt="" />
                    {resCar.range}т. км
                  </li>
                  <li>
                    <img src={Gasoline} alt="" />
                    Бензин{resCar.fuel}
                  </li>
                  <li>
                    <img src={Engine} alt="" />
                    Об'єм {resCar.engine}л
                  </li>
                  <li>
                    <img src={Clock} alt="" />
                    {resCar.year}
                  </li>
                  <li>
                    <img src={Transmission} alt="" />
                    {resCar.transmission}
                  </li>
                  <li>
                    <img src={Wheel} alt="" />
                    {resCar.wheel_drive}
                  </li>
                </ul>
                <div className="description">
                  <h1>Опис:</h1>
                  <p>{resCar.car_description}</p>
                </div>
                <button onClick={() => navigate("/contacts")}>
                  Отримати консультацію
                </button>
              </div>
            </div>
            <div className="car_characteristics">
              <div className="technical_passport">
                <h2>ТЕХНІЧНИЙ ПАСПОРТ:</h2>
                <div className="info_passport">
                  <ul className="info_passport_standart">
                    {/* <li>Тип транспорут:</li> */}
                    <li>Походження:</li>
                    <li>Місто:</li>
                    <li>Марка:</li>
                    <li>Модель:</li>
                    <li>Рік:</li>
                    <li>Колір:</li>
                    <li>Пошкоджений:</li>
                    <li>Розмитнений:</li>
                    <li>Привід:</li>
                    <li>Коробка:</li>
                    <li>Паливо:</li>
                  </ul>
                  <div className="info_passport_bd">
                    <ul>
                      {/* <li>Авто {resCar.model}</li> */}
                      <li>{resCar.origin}</li>
                      <li>{resCar.city}</li>
                      <li>{resCar.brand}</li>
                      <li>{resCar.model}</li>
                      <li>{resCar.year}</li>
                      <li>{resCar.color}</li>
                      <li>{resCar.injured}</li>
                      <li>{resCar.customs_cleared}</li>
                      <li>{resCar.wheel_drive}</li>
                      <li>{resCar.transmission}</li>
                      <li>{resCar.fuel}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="complete_set">
                <h2>КОМПЛЕКТАЦІЯ:</h2>
                <ul>
                  <li>
                    Безпека: <span>{resCar.security}</span>
                  </li>
                  <li>
                    Мультьмедіа: <span>{resCar.multimedia}</span>
                  </li>
                  <li>
                    Комфорт: <span>{resCar.comfort}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default AboutCar;
