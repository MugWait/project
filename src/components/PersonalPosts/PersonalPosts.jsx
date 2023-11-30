import React, { useEffect, useState } from "react";
import Car from "../../assets/chevrolet_camaro.jpg";
import { supabase } from "../SupabaseConf/Supabase";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const PersonalPosts = () => {
  const navigate = useNavigate();
  const [carsInfo, setCarsInfo] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const [userCar, setUserCar] = useState([]);
  // const [idCar, setIdCar] = useState("");
  const [loader, setLoader] = useState(false);
  // console.log(idCar);
  console.log(userCar);

  async function getCars() {
    const { data: cars } = await supabase.from("cars").select("*");
    setCarsInfo(cars);
    console.log(cars);
  }

  async function getCar() {
    let Car = await carsInfo.filter(function (res) {
      console.log(res);
      return userInfo == res?.user_id;
    });
    setUserCar(Car);
    console.log(Car);
    if (Car !== []) {
      setLoader(false);
    }
  }

  async function getUserInfo() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // console.log(user.id);
    setUserInfo(user.id);
  }

  useEffect(() => {
    setLoader(true);
    getUserInfo();
    getCars();
  }, []);

  ////////////////////////////////////////////////////////////////
  setTimeout(() => getCar(), 5000); /////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////

  async function deletePost(id) {
    const { error } = await supabase.from("cars").delete("*").eq("id", id);
    document.location.reload();
  }

  // function Datele(useId) {
  //   setIdCar(useId);
  //   console.log(useId);
  //   deletePost();
  // }

  return (
    <>
      {loader == false ? (
        <>
          {userCar.length !== 0 ? (
            <>
              {userCar.map((res) => (
                <>
                  <div className="users_cars_post">
                    <NavLink to={`/about_car/${res.id}`}>
                      <img src={res.img_link} alt="" />
                    </NavLink>
                    <NavLink to={`/update_car/${res.id}`}>
                      <button>Редагувати</button>
                    </NavLink>
                    <button onClick={() => deletePost(res.id)}>Видалити</button>
                  </div>
                </>
              ))}
            </>
          ) : (
            <h1>Оголошення відсутні</h1>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PersonalPosts;
