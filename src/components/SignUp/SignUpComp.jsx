import React, { useState } from "react";
import { supabase } from "../SupabaseConf/Supabase";

const SignUpComp = () => {
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [messageInfo, setMessageInfo] = useState("?");

  console.log(emailData, passwordData);
  async function signUp() {
    let { data, error } = await supabase.auth.signUp({
      email: emailData,
      password: passwordData,
    });
    console.log(data);
    if (data.user === null) {
      setMessageInfo(
        "Щось не так. Перевірте на правильність заповнення данних"
      );
    } else if (data.user !== null) {
      setMessageInfo("Підвердіть свою електронну адресу");
    }
  }

  const checkUp = () => {
    if (confirmPass === passwordData) {
      signUp();
    } else {
      setMessageInfo(
        "Щось не так. Перевірте на правильність заповнення данних"
      );
    }
  };

  return (
    <>
      <h4
        title="Введіть дані за вказаними параметрами:
        - перед натисненням кнопки Зареєструватися
         перевірте на правильність введення електронної адреси;
      - пароль повинен бути не менше 6-ти символів;"
      >
        {messageInfo}
      </h4>
      {/* <input placeholder="Прізвище" type="text" /> */}
      {/* <input placeholder="Ім'я" type="text" /> */}
      <br />
      <input
        placeholder="Електронна адреса"
        type="email"
        onChange={(e) => setEmailData(e.target.value)}
      />
      <br />
      {/* <input placeholder="Телефон" type="tel" /> */}
      {/* <br /> */}
      <input
        placeholder="Пароль"
        type="password"
        onChange={(e) => setPasswordData(e.target.value)}
      />
      <br />
      <input
        placeholder="Підтвердіть пароль"
        type="password"
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <br />
      <div className="confirm">
        <input type="checkbox" />
        <p>
          Я приймаю умови
          <span>"Згоди про надання послуг онлайн-сервісів"</span>
        </p>
      </div>

      <button onClick={() => checkUp()}>Зареєструватися</button>
    </>
  );
};

export default SignUpComp;
