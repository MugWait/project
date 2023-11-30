import React from "react";
import GoogleLogo from "../../assets/google-logo.png";
import { supabase } from "../../components/SupabaseConf/Supabase";
import { userSignIn } from "../../components/User/LogUser";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  // const navigate = useNavigate();

  // supabase.auth.onAuthStateChange(async (event) => {
  //   if (event !== "SIGNED_OUT") {
  //     // url profile
  //     navigate("/profile");
  //   } else {
  //     navigate("/");
  //   }
  // });

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <div className="social_media">
      <h3>Увійти за допомогою:</h3>
      <img src={GoogleLogo} alt="Logo" onClick={() => signInWithGoogle()} />
    </div>
  );
};

export default GoogleLogin;
