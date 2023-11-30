import React, { useEffect, useState } from "react";
import {
  carBrand,
  carCategory,
  cityCar,
  colorCar,
  comfortCar,
  fuelCar,
  multimediaCar,
  securityCar,
  transmissionCar,
  wheelDriveCar,
  yearCar,
} from "../../views/AddNewCar/AddPostInfo";
import { supabase } from "../SupabaseConf/Supabase";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [imgInfo, setImgInfo] = useState(null);
  const params = useParams();
  console.log(params);
  const [getAboutInfo, setGetAboutInfo] = useState([]);
  const [carsInfoAbout, setCarsInfoAbout] = useState({});
  const [post, setPost] = useState({
    // car_price: getAboutInfo.car_price,
    // car_description: carsInfoAbout.car_description,
    // type_of_transport: "",
    // origin: "",
    // city: "",
    // brand: "",
    // model: "",
    // year: "",
    // color: "",
    // injured: "",
    // customs_cleared: "",
    // wheel_drive: "",
    // transmission: "",
    // security: "",
    // multimedia: "",
    // comfort: "",
    // fuel: "",
    // engine: "",
    // range: "",
    // img_url: "",
    // img_link: "",
    // user_id: "",
  });
  console.log(post);

  console.log(getAboutInfo);

  async function getCars() {
    const { data: cars } = await supabase.from("cars").select("*");
    setCarsInfoAbout(cars);
  }

  async function getCar() {
    let Car = await carsInfoAbout.filter(function (res) {
      return res.id == params.carId;
    });
    setGetAboutInfo(Car[0]);
  }

  useEffect(() => {
    getCars();
    getCar();
    imgLink(imgInfo);
  }, [imgInfo]);

  async function imgLink(event) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const mainIMG = event?.target.files[0];
    const { data } = await supabase.storage
      .from("images")
      .getPublicUrl(user.id + "/" + mainIMG?.name);
    setPost({ ...post, img_link: data.publicUrl });
    console.log(data.publicUrl);
  }

  ////////////////////////////
  setTimeout(() => getCar(), 5000); //////////////////////////////
  ///////////////////////////

  async function UpdatePost() {
    const { error } = await supabase
      .from("cars")
      .update(post)
      .eq("id", params.carId);

    uploadImg();
    navigate("/profile");
  }

  async function uploadImg() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const mainIMG = imgInfo.target.files[0];
    // console.log(avatarFile);

    const { data, error } = await supabase.storage
      .from("images")
      .upload(user.id + "/" + mainIMG.name, mainIMG);
  }

  return (
    <>
      {/* {getAboutInfo.map((res) => ( */}
      <>
        <div className="container">
          <div className="post-header">
            <div className="layout_post">
              <div className="h_post">
                <h1>Оновити оголошення</h1>
                <p>Опишіть у подробицях</p>
              </div>

              <div className="input-file-container">
                <input
                  className="input-file"
                  id="my-file"
                  type="file"
                  onChange={(e) => setImgInfo(e)}
                />
                <label className="input-file-trigger">Выберите файл</label>
              </div>
              <p className="file-return"></p>

              <div className="price_post_car margin_post_car">
                <h3>Ціна: {getAboutInfo.car_price}</h3>
                <input
                  type="number"
                  placeholder="20000"
                  onChange={(e) =>
                    setPost({ ...post, car_price: e.target.value })
                  }
                />
              </div>

              <div className="text_post_car margin_post_car">
                <h3 className="about_car_test_info">
                  Опис: {getAboutInfo.car_description?.substr(0, 100) + "..."}
                </h3>
                <textarea
                  value={post.car_description}
                  placeholder="Опишіть своє авто"
                  onChange={(e) =>
                    setPost({ ...post, car_description: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="category_post_car margin_post_car">
                <h3>Категорія: {getAboutInfo.type_of_transport}</h3>
                <select
                  value={post.type_of_transport}
                  onChange={(e) =>
                    setPost({ ...post, type_of_transport: e.target.value })
                  }
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть категорію ---
                  </option>
                  {carCategory.map((type_of_transport) => (
                    <option>{type_of_transport}</option>
                  ))}
                </select>
              </div>
              <div className="origin_post_car margin_post_car">
                <h3>Походження авто: {getAboutInfo.origin}</h3>
                <select
                  value={post.origin}
                  onChange={(e) => setPost({ ...post, origin: e.target.value })}
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть походження ---
                  </option>
                  <option>Європа</option>
                </select>
              </div>
              <div className="city_post_car margin_post_car">
                <h3>Місто перебування: {getAboutInfo.city} </h3>
                <select
                  value={post.city}
                  onChange={(e) => setPost({ ...post, city: e.target.value })}
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть місто ---
                  </option>
                  {cityCar.map((city) => (
                    <option>{city}</option>
                  ))}
                </select>
              </div>
              <div className="brand_post_car margin_post_car">
                <h3>Марка: {getAboutInfo.brand}</h3>
                <select
                  value={post.brand}
                  onChange={(e) => setPost({ ...post, brand: e.target.value })}
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть марку ---
                  </option>
                  {carBrand.map((brand) => (
                    <option>{brand}</option>
                  ))}
                </select>
              </div>
              <div className="model_post_car margin_post_car">
                <h3>Модель: {getAboutInfo.model}</h3>

                <input
                  type="text"
                  value={post.model}
                  onChange={(e) => setPost({ ...post, model: e.target.value })}
                />
              </div>
              <div className="year_post_car margin_post_car">
                <h3>Рік виготовлення: {getAboutInfo.year}</h3>
                <select
                  value={post.year}
                  onChange={(e) => setPost({ ...post, year: e.target.value })}
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть рік ---
                  </option>
                  {yearCar.map((year) => (
                    <option>{year}</option>
                  ))}
                </select>
              </div>
              <div className="color_post_car margin_post_car">
                <h3>Колір: {getAboutInfo.color}</h3>
                <select
                  value={post.color}
                  onChange={(e) => setPost({ ...post, color: e.target.value })}
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть колір ---
                  </option>
                  {colorCar.map((color) => (
                    <option>{color}</option>
                  ))}
                </select>
              </div>
              <div className="injured_post_car margin_post_car">
                <h3>Пошкодження: {getAboutInfo.injured}</h3>
                <select
                  value={post.injured}
                  onChange={(e) =>
                    setPost({ ...post, injured: e.target.value })
                  }
                >
                  <option value="" defaultValue hidden>
                    --- Авто пребувало в ДТП ---
                  </option>
                  <option>Так</option>
                  <option>Ні</option>
                </select>
              </div>
              <div className="customs_cleared_post_car margin_post_car">
                <h3>Розмитнено: {getAboutInfo.customs_cleared}</h3>
                <select
                  value={post.customs_cleared}
                  onChange={(e) =>
                    setPost({ ...post, customs_cleared: e.target.value })
                  }
                >
                  <option value="" defaultValue hidden>
                    --- Розмитнене авто ---
                  </option>
                  <option>Так</option>
                  <option>Ні</option>
                </select>
              </div>
              <div className="wheel_drive_post_car margin_post_car">
                <h3>Привід: {getAboutInfo.wheel_drive}</h3>
                <select
                  value={post.wheel_drive}
                  onChange={(e) =>
                    setPost({ ...post, wheel_drive: e.target.value })
                  }
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть тип приводу ---
                  </option>
                  {wheelDriveCar.map((wheel) => (
                    <option>{wheel}</option>
                  ))}
                </select>
              </div>
              <div className="transmission_post_car margin_post_car">
                <h3>Коробка передач: {getAboutInfo.transmission}</h3>
                <select
                  value={post.transmission}
                  onChange={(e) =>
                    setPost({ ...post, transmission: e.target.value })
                  }
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть тип коробки передач ---
                  </option>
                  {transmissionCar.map((transmission) => (
                    <option>{transmission}</option>
                  ))}
                </select>
              </div>
              <div className="fuel_post_car margin_post_car">
                <h3>Паливо: {getAboutInfo.fuel}</h3>
                <select
                  value={post.fuel}
                  onChange={(e) => setPost({ ...post, fuel: e.target.value })}
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть тип палива ---
                  </option>
                  {fuelCar.map((fuel) => (
                    <option>{fuel}</option>
                  ))}
                </select>
              </div>
              <div className="comfort_post_car margin_post_car">
                <h3>Комфорт: {getAboutInfo.comfort}</h3>
                <select
                  value={post.comfort}
                  onChange={(e) =>
                    setPost({ ...post, comfort: e.target.value })
                  }
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть комплектацію авто ---
                  </option>
                  {comfortCar.map((comfort) => (
                    <option>{comfort}</option>
                  ))}
                </select>
              </div>
              <div className="multimedia_post_car margin_post_car">
                <h3>Мультимедія: {getAboutInfo.multimedia}</h3>
                <select
                  value={post.multimedia}
                  onChange={(e) =>
                    setPost({ ...post, multimedia: e.target.value })
                  }
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть мультимедію ---
                  </option>
                  {multimediaCar.map((multimedia) => (
                    <option>{multimedia}</option>
                  ))}
                </select>
              </div>
              <div className="security_post_car margin_post_car">
                <h3>Сигналізація: {getAboutInfo.security}</h3>
                <select
                  value={post.security}
                  onChange={(e) =>
                    setPost({ ...post, security: e.target.value })
                  }
                >
                  <option value="" defaultValue hidden>
                    --- Оберіть тип сигналізації ---
                  </option>
                  {securityCar.map((security) => (
                    <option>{security}</option>
                  ))}
                </select>
              </div>
              <div className="engine_post_car margin_post_car">
                <h3>Об'єм двигуна: {getAboutInfo.engine} (л.)</h3>
                <input
                  type="number"
                  placeholder="2"
                  value={post.engine}
                  onChange={(e) => setPost({ ...post, engine: e.target.value })}
                />
              </div>
              <div className="range_post_car margin_post_car">
                <h3>Пробіг: {getAboutInfo.range} (тис.)</h3>
                <input
                  type="number"
                  placeholder="20000"
                  value={post.range}
                  onChange={(e) => setPost({ ...post, range: e.target.value })}
                />
              </div>
              <div className="btn_post_car">
                <button onClick={() => UpdatePost()}>Створити</button>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* ))} */}
    </>
  );
};

export default Update;
