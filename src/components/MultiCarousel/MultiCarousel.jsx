import React, { useEffect, useState } from "react";
import BanerCars from "../../assets/1579155590_31-39.jpg";
import Road from "../../assets/road-icon-gray.svg";
import Clock from "../../assets/clock-icon-gray.svg";
import Engine from "../../assets/engine-icon-gray.svg";
import Gasoline from "../../assets/gasoline-icon-gray.svg";
import Transmission from "../../assets/transmission-icon-gray.svg";
import Wheel from "../../assets/wheel-drive-icon-gray.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { supabase } from "../SupabaseConf/Supabase";
import { NavLink } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiCarousel = () => {
  const [carsInfo, setCarsInfo] = useState([]);

  console.log(carsInfo);

  async function getCars() {
    const { data: cars } = await supabase.from("cars").select("*").range(0, 9);
    setCarsInfo(cars);
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();
  }
  useEffect(() => {
    getCars();
  }, []);
  return (
    <>
      <Carousel responsive={responsive}>
        {carsInfo.map((car) => (
          <>
            <div className="post_block" key={car.id}>
              <img src={car.img_link} alt="car" />
              <h2>
                {car.brand} {car.model}
              </h2>
              <div className="post_info">
                <ul>
                  <li>
                    <img src={Road} alt="" /> <p>{car.range} т.</p>
                  </li>
                  <li>
                    <img src={Gasoline} alt="" /> <p>{car.fuel}</p>
                  </li>
                  <li>
                    <img src={Engine} alt="" /> <p>Двигун {car.engine} л.</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src={Clock} alt="" /> <p>{car.year}</p>
                  </li>
                  <li>
                    <img src={Transmission} alt="" /> <p>{car.transmission}</p>
                  </li>
                  <li>
                    <img src={Wheel} alt="" /> <p>{car.wheel_drive}</p>
                  </li>
                </ul>
              </div>
              <div className="more_about_post">
                <h2>{car.car_price} $</h2>
                <NavLink to={`/about_car/${car.id}`}>
                  <button>Хочу</button>
                </NavLink>
              </div>
            </div>
          </>
        ))}
        {/* <div className="post_block">
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
            <h2> $</h2>
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
        </div> */}
      </Carousel>
    </>
  );
};

export default MultiCarousel;
