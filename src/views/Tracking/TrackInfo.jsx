import React from "react";
import "./trackInfo.css";
import RGB from "../../assets/ic_rgb.626b905a.svg";
import CAR from "../../assets/ic_car.f5b978f3.svg";
import FUEL from "../../assets/ic_fuel.09683f47.svg";
import ENGINE from "../../assets/ic_engine.0186fd62.svg";
import CALENDAR from "../../assets/ic_calendar.16ecdb94.svg";
import BARCODE from "../../assets/ic_barcode.77508adf.svg";
import IMG from "../../assets/chevrolet_camaro__332631333f.jpg";
import Wheel from "../../assets/wheel-drive-icon-gray.svg";
import { useNavigate } from "react-router-dom";

const TrackInfo = ({ getVININFO }) => {
  const navigate = useNavigate();
  console.log(getVININFO);
  return (
    <>
      {getVININFO?.map((res) => (
        <>
          <div className="container">
            <div className="vin-header">
              <div className="layout_vin">
                <div className="h_info">
                  <h2>Держ. реєстрація</h2>
                  <p>Україна</p>
                </div>
                <div className="vin_car_name">
                  <div className="vin_name">
                    <h2>
                      {res.brand} {res.model}
                    </h2>
                    <h4>{res.year}</h4>
                  </div>
                  <p>
                    ≈ {res?.car_price} <span>$</span>
                  </p>
                </div>
                <hr />
                <div className="params_vin">
                  <p>Параметри:</p>
                  <div className="param_data">
                    <div className="param_data_vin">
                      <img src={RGB} alt="" />
                      <p>Колір</p>
                      <h4>{res?.color}</h4>
                    </div>
                    <div className="param_data_vin">
                      <img src={CAR} alt="" />
                      <p>Тип</p>
                      <h4>{res?.type_of_transport}</h4>
                    </div>
                    <div className="param_data_vin">
                      <img src={FUEL} alt="" />
                      <p>Паливо</p>
                      <h4>{res?.fuel}</h4>
                    </div>
                    <div className="param_data_vin">
                      <img src={ENGINE} alt="" />
                      <p>Об'єм двигуна</p>
                      <h4>{res?.engine}</h4>
                    </div>

                    {/* <div className="param_data_vin">
                      <h3>B</h3>
                      <p>Категорія</p>
                      <h4>B</h4>
                    </div> */}
                    <div className="param_data_vin">
                      <img src={Wheel} alt="" />
                      <p>Привід авто</p>
                      <h4>{res.wheel_drive}</h4>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="vin_region">
                  <h1>AX</h1>
                  <div className="region_data">
                    <p>Регіон</p>
                    <h2>{res?.city}</h2>
                  </div>
                </div>
                <div className="vin_region">
                  <img src={CALENDAR} alt="" />
                  <div className="region_data">
                    <p>Дата першої реєстрації</p>
                    <h2>{res?.created_at.slice(0, 10)}</h2>
                  </div>
                </div>
                <div className="vin_region">
                  <img src={BARCODE} alt="" />
                  <div className="region_data">
                    <p>VIN</p>
                    <h2>{res?.vin_num}</h2>
                  </div>
                </div>
                <hr />
                <div className="vin_slider">
                  <img src={res.img_link} alt="" />
                </div>
                <div className="vin_btn">
                  <button onClick={() => navigate("/tracking")}>
                    Повернутися на головну
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default TrackInfo;
