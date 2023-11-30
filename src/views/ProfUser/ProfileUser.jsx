import React, { useState } from "react";
import "./profile.css";
import Avatar from "../../assets/avatar.png";
import Car from "../../assets/chevrolet_camaro.jpg";
import UserCard from "../../components/User/UserCard";
import { useNavigate } from "react-router-dom";
import PersonalPosts from "../../components/PersonalPosts/PersonalPosts";

const ProfileUser = () => {
  const navigate = useNavigate();
  const [codeAdmin, setCodeAdmin] = useState();
  const [verifi, setVerifi] = useState(false);

  function verifiedCode() {
    if (codeAdmin == "1e1e1e") {
      setVerifi(true);
    } else {
      setVerifi(false);
    }
  }

  return (
    <div>
      <div className="user_info_div">
        <div className="container">
          <div className="user_info_prof">
            <div className="personal_info">
              <UserCard />
              <div className="doc_user">
                <div className="search_doc">
                  <h3>
                    Документи при оформленні купівлі або продажу автомобіля
                  </h3>
                  {/* <input type="text" /> */}
                </div>
                <hr />
                <div className="all_doc">
                  <div
                    className="doc_box"
                    title="Оригінал паспорта або іншого документа, що посвідчує особу власника."
                  >
                    <h3>Паспорт власника автомобіля</h3>
                    <p>Наведи курсор...</p>
                  </div>
                  <div
                    className="doc_box"
                    title="Цей документ підтверджує право власності на автомобіль і містить технічні характеристики транспортного засобу."
                  >
                    <h3>Свідоцтво про реєстрацію автомобіля</h3>
                    <p>Наведи курсор...</p>
                  </div>
                  <div
                    className="doc_box"
                    title="Документ, що підтверджує відсутність судимості у власника автомобіля. 
                    Зазвичай видається у відділі поліції або іншому компетентному органі."
                  >
                    <h3>Довідка про несудимість</h3>
                    <p>Наведи курсор...</p>
                  </div>
                  <div
                    className="doc_box"
                    title="Письмова угода між продавцем і покупцем, що містить умови та деталі процесу купівлі-продажу автомобіля. 
                    Рекомендується використовувати нотаріально засвідчений договір."
                  >
                    <h3>Договір купівлі-продажу</h3>
                    <p>Наведи курсор...</p>
                  </div>
                  <div
                    className="doc_box"
                    title="Це можуть бути сертифікати про технічний огляд, сервісні книжки, 
                    документи про заміну деталей або ремонтні рахунки, які підтверджують стан автомобіля."
                  >
                    <h3>Довідка про технічний стан автомобіля</h3>
                    <p>Наведи курсор...</p>
                  </div>
                  <div
                    className="doc_box"
                    title="Цей документ видається на час переоформлення автомобіля і 
                    дає право на користування ним до отримання нового свідоцтва про реєстрацію."
                  >
                    <h3>Перехідний талон (техпаспорт)</h3>
                    <p>Наведи курсор...</p>
                  </div>
                  <div
                    className="doc_box"
                    title="Обов'язкове страхування цивільної відповідальності власників транспортних засобів. 
                    Потрібно мати дійсний поліс ОСАГО на момент продажу."
                  >
                    <h3>Страховий поліс ОСАГО</h3>
                    <p>Наведи курсор...</p>
                  </div>
                  <div
                    className="doc_box"
                    title="Відомості про сплату податку на власність автомобіля, 
                    які видані органами Державної фіскальної служби."
                  >
                    <h3>Довідка про сплату податку на автомобіль</h3>
                    <p>Наведи курсор...</p>
                  </div>
                  <div
                    className="doc_box"
                    title="Якщо автомобіль був придбаний за межами України або ввезений з-за кордону, 
                    може знадобитися квитанція про сплату мита."
                  >
                    <h3>Квитанція про сплату мита</h3>
                    <p>Наведи курсор...</p>
                  </div>
                </div>
              </div>
              <div className="card_user">
                <h2>
                  Активація послуги "Додай авто"
                  <input
                    type="text"
                    onChange={(e) => setCodeAdmin(e.target.value)}
                  />{" "}
                  <br />
                  <button onClick={() => verifiedCode()}>
                    Активувати послугу
                  </button>
                </h2>
              </div>
            </div>
            <div className="user_s_car">
              <h2>Ваші оголошення</h2>
              <hr />
              <div className="user_cars_scroll">
                <PersonalPosts />
              </div>
              <button
                disabled={!verifi}
                className="btn_add_car"
                onClick={() => navigate("/new_post")}
              >
                Додати авто
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
