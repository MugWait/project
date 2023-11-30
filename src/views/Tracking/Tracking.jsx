import React, { useEffect, useState } from "react";
import "./tracking.css";
import AUDI from "../../assets/audi.png";
import AppDealer from "../../assets/Dealer_Connect_M.png";
import TrackInfo from "./TrackInfo";
import { supabase } from "../../components/SupabaseConf/Supabase";

const Tracking = () => {
  const [trackNum, setTrackNum] = useState("");
  const [getVININFO, setGetVININFO] = useState([]);

  console.log(getVININFO);

  const [carsInfoVIN, setCarsInfoVIN] = useState([]);

  // console.log(carsInfoVIN);

  async function getCars() {
    const { data: cars } = await supabase.from("cars").select("*").range(0, 9);
    setCarsInfoVIN(cars);
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();
  }

  function getVINCar() {
    let Vin = carsInfoVIN.filter(function (val) {
      return val.vin_num === trackNum;
    });
    // console.log(Vin);
    setGetVININFO(Vin);
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <div className="head_track-bg">
        <div className="container">
          <div className="tracking-header">
            <div className="layout_grid">
              <div className="tracking_main_h1">
                <h1>
                  Перевірити автомобіль по<span> VIN</span>
                </h1>
              </div>
              <div className="tracking_sml_link">
                <div className="chips-holder">
                  <div className="chip-set">
                    <button className="track_btn">
                      <span>Держ. номер</span>
                    </button>
                    <button className="active_track_btn" id="mdc-chip-2">
                      <span className="chip__text">VIN</span>
                    </button>
                  </div>
                  <a id="demo-link" href="/vin/5YJXCBE2XHF043074">
                    Приклад звіту
                  </a>
                </div>
                <div className="tracking-bar">
                  <div className="ripple-upgraded">
                    <input
                      placeholder="JMZGG12F761624527"
                      maxLength="17"
                      minLength="17"
                      onChange={(e) => setTrackNum(e.target.value)}
                    />
                    <button
                      className="tracking_btn"
                      aria-label="Пошук"
                      onClick={() => getVINCar()}
                    >
                      <span>
                        <i
                          className="fa fa-search fa-2x"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrackInfo getVININFO={getVININFO} />

      <div className="container">
        <div className="search_news">
          <div className="app_phone">
            <img src={AppDealer} alt="" />
          </div>
          <div className="in_trend">
            <h2>В тренді сьогодні</h2>
            <div className="trend_block">
              <div className="trend_name_info">
                <div className="car-trend_name">
                  <h3>DAEWOO LANOS</h3>
                  <p>2008</p>
                </div>
                <img src={AUDI} alt="" />
              </div>
              <hr />
              <h4>KB9999KB</h4>
            </div>
            <div className="trend_block">
              <div className="trend_name_info">
                <div className="car-trend_name">
                  <h3>DAEWOO LANOS</h3>
                  <p>2008</p>
                </div>
                <img src={AUDI} alt="" />
              </div>
              <hr />
              <h4>KB9999KB</h4>
            </div>
            <div className="trend_block">
              <div className="trend_name_info">
                <div className="car-trend_name">
                  <h3>DAEWOO LANOS</h3>
                  <p>2008</p>
                </div>
                <img src={AUDI} alt="" />
              </div>
              <hr />
              <h4>KB9999KB</h4>
            </div>
          </div>
          <div className="search_history">
            <h2>Ваша історія пошуку</h2>
            <div className="trend_block">
              <div className="trend_name_info">
                <div className="car-trend_name">
                  <h3>DAEWOO LANOS</h3>
                  <p>2008</p>
                </div>
                <img src={AUDI} alt="" />
              </div>
              <hr />
              <h4>KB9999KB</h4>
            </div>
            <div className="trend_block">
              <div className="trend_name_info">
                <div className="car-trend_name">
                  <h3>DAEWOO LANOS</h3>
                  <p>2008</p>
                </div>
                <img src={AUDI} alt="" />
              </div>
              <hr />
              <h4>KB9999KB</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracking;
