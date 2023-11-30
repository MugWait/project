import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseConf/Supabase";
import Avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUserInfo(user.user_metadata);
  }
  console.log(userInfo);

  return (
    <div className="contact_user_info">
      {userInfo?.avatar_url !== undefined ? (
        <img className="user_index_logo" src={userInfo?.avatar_url} alt="" />
      ) : (
        <img className="user_index_logo" src={Avatar} alt="" />
      )}
      <h3 className="user_name">{userInfo.full_name}</h3>
      <h4>Особиста інформація:</h4>
      <div className="form_user-contact">
        <h4>Email:</h4> {userInfo.email}
        {/* <input
          type="text"
          value={userInfo.email}
          onChange={(e) => e.target.value}
        /> */}
      </div>

      {/* <div className="form_user-contact">
        <h4>Телефон:</h4>
        <input type="text" />
      </div>
      <div className="user_date">
        <h4>Дата народження:</h4>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>

      <button>Зберегти</button> */}
    </div>
  );
};

export default UserCard;
