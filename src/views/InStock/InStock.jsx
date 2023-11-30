import React, { useEffect, useState } from "react";
import "./stock.css";
import CarStock from "../../components/StockBD/CarStock";
import { supabase } from "../../components/SupabaseConf/Supabase";
import CarBDFilter from "../../components/StockBD/CarBDFilter";

const InStock = () => {
  const [allCar, setAllCar] = useState();
  const [filterInfo, setFilterInfo] = useState({
    carCategory: "",
    origin: "",
    cityCar: "",
    carBrand: "",
    yearCarFrom: "",
    yearCarTo: "",
    priceCarFrom: "",
    priceCarTo: "",
    colorCar: "",
    transmissionCar: "",
    fuelCar: "",
  });

  async function getCars() {
    const { data: cars } = await supabase.from("cars").select("*");
    // setAllCar(cars.length);
  }
  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <div className="container">
        <div className="stock-header">
          <div className="aside-wrapper">
            <CarBDFilter
              setFilterInfo={setFilterInfo}
              filterInfo={filterInfo}
            />
          </div>
          <div className="posts_stock">
            <div className="layout_stock">
              <div className="stock_main_h1">
                <p>Знайдено оголошень {allCar}</p>
                <h1>
                  Відшукай своє ідеальне<span> АВТО</span>
                </h1>
              </div>
              <div className="sorting-filter">
                {/* <select name="drinks">
                  <option value="" defaultValue hidden>
                    Choose a drink
                  </option>
                  <option value="coffee">Coffee</option>
                  <option value="tea">Tea</option>
                  <option value="milk">Milk</option>
                </select> */}
              </div>
            </div>

            <CarStock
              setFilterInfo={setFilterInfo}
              filterInfo={filterInfo}
              setAllCar={setAllCar}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InStock;
