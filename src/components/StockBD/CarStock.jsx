import React, { useEffect } from "react";
import BanerCars from "../../assets/1579155590_31-39.jpg";
import Road from "../../assets/road-icon-gray.svg";
import Clock from "../../assets/clock-icon-gray.svg";
import Engine from "../../assets/engine-icon-gray.svg";
import Gasoline from "../../assets/gasoline-icon-gray.svg";
import Transmission from "../../assets/transmission-icon-gray.svg";
import Wheel from "../../assets/wheel-drive-icon-gray.svg";
import { supabase } from "../SupabaseConf/Supabase";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CarStock = ({ setFilterInfo, filterInfo, setAllCar }) => {
  const [carsInfo, setCarsInfo] = useState([]);
  const navigate = useNavigate();

  // console.log(carsInfo);

  async function getCars() {
    const { data: cars } = await supabase
      .from("cars")
      .select("*")
      .eq(
        filterInfo.carCategory === "" ? "" : "type_of_transport",
        filterInfo.carCategory
      )
      .eq(filterInfo.origin === "" ? "" : "origin", filterInfo.origin)
      .eq(filterInfo.cityCar === "" ? "" : "city", filterInfo.cityCar)
      .eq(filterInfo.carBrand === "" ? "" : "brand", filterInfo.carBrand)
      .lt(filterInfo.yearCarFrom === "" ? "" : "year", filterInfo.yearCarFrom)
      .gt(filterInfo.yearCarTo === "" ? "" : "year", filterInfo.yearCarTo)
      .lt(
        filterInfo.priceCarTo === "" ? "" : "car_price",
        filterInfo.priceCarTo
      )
      .gt(
        filterInfo.priceCarFrom === "" ? "" : "car_price",
        filterInfo.priceCarFrom
      )
      .eq(filterInfo.colorCar === "" ? "" : "color", filterInfo.colorCar)
      .eq(
        filterInfo.transmissionCar === "" ? "" : "transmission",
        filterInfo.transmissionCar
      )
      .eq(filterInfo.fuelCar === "" ? "" : "fuel", filterInfo.fuelCar);

    setCarsInfo(cars);
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();
  }
  useEffect(() => {
    getCars();
    setAllCar(carsInfo.length);
  }, [carsInfo]);

  return (
    <>
      {carsInfo.map((carInfo) => (
        <div className="box_post_stock" key={carInfo.id}>
          <img className="stock_img_main" src={carInfo.img_link} alt="" />
          <div className="general-info">
            <h1>
              {carInfo.brand} {carInfo.model}
            </h1>
            <div className="car_stock_info">
              <div className="first-column">
                <div className="range">
                  <img src={Road} alt="" />
                  <div>{carInfo.range} т.</div>
                </div>
                <div className="fuel">
                  <img src={Gasoline} alt="" />
                  <div>{carInfo.fuel}</div>
                </div>
                <div className="engine">
                  <img src={Engine} alt="" />
                  <div>Двигун {carInfo.engine} л.</div>
                </div>
              </div>
              <div className="second-column">
                <div className="year">
                  <img src={Clock} alt="" />
                  <div>{carInfo.year}</div>
                </div>
                <div className="transmission">
                  <img src={Transmission} alt="" />
                  <div>{carInfo.transmission}</div>
                </div>
                <div className="wheel">
                  <img src={Wheel} alt="" />
                  <div>{carInfo.wheel_drive}</div>
                </div>
              </div>
              <div className="third-column">
                <div className="price">
                  <div>Ціна</div>
                  <span>{carInfo.car_price} $</span>
                </div>
              </div>
              <div className="btn_stock_conf">
                <NavLink to={`/about_car/${carInfo.id}`}>
                  <button className="btn_stock">Детальніше про авто...</button>
                </NavLink>
                <button
                  className="btn_stock_other"
                  onClick={() => navigate("/contacts")}
                >
                  Підібрати авто з Європи
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarStock;
