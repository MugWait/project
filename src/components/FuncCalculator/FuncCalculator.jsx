import React, { useState } from "react";
import { useEffect } from "react";

const infoCar = {
  years: [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
    2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
    1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988,
    1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976,
    1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965,
  ],

  typesCar: ["Бензин", "Дизель", "Електро"],
};

const FuncCalculator = () => {
  const [yearCar, setYearCar] = useState(2023);
  const [carType, setCarType] = useState("Бензин");
  const [engineCap, setEngineCap] = useState(0);
  const [price, setPrice] = useState(0);
  const [excise, setExcise] = useState(0);
  // const [rate, setRate] = useState(0);
  const [customs, setCustoms] = useState(0);
  const [pdv, setPDV] = useState(0);
  const [total, setTotal] = useState(0);

  //   console.log(parseInt(engineCap, 10));
  //   console.log(carType);

  useEffect(() => {
    CalculateExcise();
    CalculateCustoms();
    CalculatePDV();
    totalPrice();
  }, [price, carType, total, pdv, engineCap]);

  // nice
  function CalculateExcise() {
    // console.log("yes");

    let rate = 0;
    if (carType === "Бензин") {
      if (price < 3000) {
        // console.log("yes");
        rate = 50;
      } else {
        // console.log("no");
        rate = 100;
      }
    } else if (carType === "Дизель") {
      if (price > 3500) {
        rate = 75;
      } else {
        rate = 100;
      }
    } else {
      rate = 1;
    }
    setExcise(rate * (engineCap / 1000) * (2024 - yearCar));
    // console.log(rate, engineCap, yearCar);
  }

  function CalculateCustoms() {
    let rate = 10;
    setCustoms((price / 100) * rate);
  }
  function CalculatePDV() {
    let rate = 20;
    setPDV(
      (price / 100) * rate + (excise / 100) * rate + (customs / 100) * rate
    );
    // console.log(price);
    // console.log(excise);
    // console.log(customs);
  }
  function totalPrice() {
    setTotal(price + excise + customs + pdv);
  }

  return (
    <>
      <div className="calc_form_div">
        <div className="calc_calcForm ">
          <p className="calc_formLabel">Калькулятор</p>
          <div className="column">
            <p className="calc_label">Ціна авто (USD)</p>
            <input
              className="auto_res"
              onChange={(e) => setPrice(parseInt(e.target.value, 10))}
            />
          </div>
          <div className="column">
            <p className="calc_label">Рік випуску</p>
            <select
              className="auto_res"
              onChange={(e) => setYearCar(parseInt(e.target.value, 10))}
            >
              {infoCar.years.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="column">
            <p className="calc_label">Тип двигуна</p>
            <select
              className="auto_res"
              onChange={(e) => setCarType(e.target.value)}
            >
              {infoCar.typesCar.map((type_car) => (
                <option value={type_car}>{type_car}</option>
              ))}
            </select>
          </div>
          <div className="column">
            <p className="calc_label">
              Об'єм двигуна (см3)/Ємність батареї (кВт)
            </p>
            <input
              className="auto_res"
              onChange={(e) => setEngineCap(parseInt(e.target.value, 10))}
            />
          </div>
        </div>
        <div className="calc_calcForm column">
          <p className="calc_formLabel">Ціна</p>
          <p className="calc_priceInfo">
            <span>Ціна авто</span>
            <b>{price}$</b>
          </p>
          <p className="calc_priceInfo">
            Ввізне мито<b>{customs}$</b>
          </p>
          <p className="calc_priceInfo">
            Акциз<b>{excise}$</b>
          </p>
          <p className="calc_priceInfo">
            ПДВ<b>{pdv}$</b>
          </p>
          <p className="calc_priceInfo">
            Загальна вартість<b>{total}$</b>
          </p>
          <a
            href="tel:+380 (66) 177 3992"
            className="button m-t-20 calc_button"
          >
            Зателефонувати
          </a>
          <p className="calc_details">Даний розрахунок є орієнтовним</p>
        </div>
      </div>
    </>
  );
};

export default FuncCalculator;
