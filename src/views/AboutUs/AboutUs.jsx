import React from "react";
import "./about_us.css";
import AboutMain from "../../assets/about-main.jpg";
import Autodrom from "../../assets/autodrom.jpg";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="about_div">
        <div className="about_us_main">
          <div className="cont_main_about">
            <h1>Про нас</h1>
            <h2>
              <span>Euro Car</span> — більше ніж авто з Європи
            </h2>
          </div>
          <img src={AboutMain} alt="#" />
        </div>
        <div className="company_hist">
          <div className="hist_text">
            <h1>Історія компанії Euro Car</h1>
            <p>
              <span>Початок нашої історії 2018 року.</span>
              <br />У момент, коли авто з Америки стали чимось суперечливим та
              ненадійним, а на ринку України стабільністю були неадекватні ціни,
              виникла потреба у рішенні цієї проблеми. Рішенні для усіх, кому
              потрібен автомобіль.
            </p>
            <p>
              <span>Ми обрали Європу</span>
              <br />— тому що не дивлячись на нібито складну доставку, авто з
              Європи варті того, аби купувати та привозити їх до України. Краща
              комплектація, прозора історія, ніяких скручених пробігів та ціна –
              на 20-30% нижча, аніж в Україні. Переваг більш ніж достатньо, аби
              позбутися думки про купівлю битої-фарбованої машини на місцевому
              ринку.
            </p>
            <p>
              <span>Спершу перевірили на собі</span>
              <br />— і досі їздимо лише на авто з Європи. Особистий досвід та
              досвід вже сотень клієнтів дозволяє нам стверджувати, що пригон
              авто з Європи – найкращий варіант для України.
            </p>
          </div>
          <img src={Autodrom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
