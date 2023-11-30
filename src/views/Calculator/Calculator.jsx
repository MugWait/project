import React from "react";
import "./calculator.css";
import FuncCalculator from "../../components/FuncCalculator/FuncCalculator";

const Calculator = () => {
  return (
    <>
      <div className="container">
        <div className="calc_div">
          <div className="about_calc">
            <h1>Калькулятор розрахунку авто з Європи</h1>
            <p>
              Наш калькулятор допоможе зорієнтуватися, який автомобіль з Європи
              вибрати для доставки.
            </p>
            <p>
              Під час доставки з країн Америки, наприклад, береться умовний
              каталог, де ціни завищені і не враховують невеликого зносу машини.
              Так ціна розмитнення завищується, і вам неприємно мати справу з
              такими операціями. Більше й не потрібно – доставка з Європи буде
              прозорою та простою, тим більше, ми все зробимо самі.
            </p>
          </div>
          <FuncCalculator />
          {/* <div className="calc_form_div">
            <div className="calc_calcForm ">
              <p className="calc_formLabel">Калькулятор</p>
              <div className="column">
                <p className="calc_label">Ціна авто (USD)</p>
                <input className="auto_res" value="" />
              </div>
              <div className="column">
                <p className="calc_label">Рік випуску</p>
                <select className="auto_res">
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                </select>
              </div>
              <div className="column">
                <p className="calc_label">Тип двигуна</p>
                <select className="auto_res">
                  <option value="petrol">Бензин</option>
                  <option value="diesel">Дизель</option>
                  <option value="electro">Електро</option>
                  <option value="hybrid">Гібрид</option>
                </select>
              </div>
              <div className="column">
                <p className="calc_label">
                  Об'єм двигуна (см3)/Ємність батареї (кВт)
                </p>
                <input className="auto_res" value="" />
              </div>
              <button type="button" className="button calc_button">
                Порахувати
              </button>
            </div>
            <div className="calc_calcForm column">
              <p className="calc_formLabel">Ціна</p>
              <p className="calc_priceInfo">
                <span>Ціна авто</span>
                <b>2000$</b>
              </p>
              <p className="calc_priceInfo">
                Ввізне мито<b>200$</b>
              </p>
              <p className="calc_priceInfo">
                Акциз<b>0$</b>
              </p>
              <p className="calc_priceInfo">
                ПДВ<b>440$</b>
              </p>
              <p className="calc_priceInfo">
                Загальна вартість<b>2640$</b>
              </p>
              <a
                href="tel:+380 (66) 177 3992"
                className="button m-t-20 calc_button"
              >
                Зателефонувати
              </a>
              <p className="calc_details">Даний розрахунок є орієнтовним</p>
            </div>
          </div> */}
          <p>
            - акциз, який розраховується за формулою: (Ставка) * (Обсяг двигуна
            в см3/1000) * (Кількість повних років авто), у разі з цим авто це:
            50 євро * 1,6 * 15 = 1 200 євро;
          </p>
        </div>
      </div>
    </>
  );
};

export default Calculator;
