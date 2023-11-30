import React from "react";
import { supabase } from "../SupabaseConf/Supabase";
import { useState } from "react";

const SignInComp = () => {
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [messageInfo, setMessageInfo] = useState("?");

  async function signIn() {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: emailData,
      password: passwordData,
    });
    console.log(data);
    if (data.user === null) {
      setMessageInfo(
        "Щось не так. Перевірте на правильність заповнення данних"
      );
    }
  }
  return (
    <>
      <h4
        title="- перед натисненням кнопки Увійти
         перевірте на правильність введення електронної адреси та паролю;"
      >
        {messageInfo}
      </h4>
      <input
        placeholder="Введіть логін"
        type="email"
        onChange={(e) => setEmailData(e.target.value)}
      />
      <br />
      <input
        placeholder="Введіть пароль"
        type="password"
        onChange={(e) => setPasswordData(e.target.value)}
      />
      <br />

      <button onClick={() => signIn()}>Увійти</button>
    </>
  );
};

export default SignInComp;
