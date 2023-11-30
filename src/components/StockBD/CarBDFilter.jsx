import React from "react";
import {
  carBrand,
  carCategory,
  cityCar,
  colorCar,
  fuelCar,
  transmissionCar,
  yearCar,
} from "../../views/AddNewCar/AddPostInfo";

const CarBDFilter = ({ setFilterInfo, filterInfo }) => {
  console.log(filterInfo);
  return (
    <>
      <aside className="side-filter-section">
        <div className="filter-clean">
          <span
            id="quickResetForm"
            className="filter-action-row-span"
            onClick={() =>
              setFilterInfo({
                carCategory: "",
                origin: "",
                cityCar: "",
                carBrand: "",
                yearCarFrom: "",
                yearCarTo: "",
                priceCarFrom: "",
                priceCarTo: "",
                colorCar: "",
                transmissionCar: "",
                fuelCar: "",
              })
            }
          >
            Очистити фільтр
          </span>
        </div>
        <hr />

        <div className="side-filter-filters">
          <div className="type_car margin_filter">
            <div className="collapsible active">Категорія</div>
            <select
              value={filterInfo.carCategory}
              onChange={(e) =>
                setFilterInfo({ ...filterInfo, carCategory: e.target.value })
              }
            >
              <option value="" defaultValue hidden>
                --- Оберіть тип транспорту ---
              </option>
              {carCategory.map((category) => (
                <option>{category}</option>
              ))}
            </select>
          </div>

          <div className="margin_filter">
            <div className="collapsible active">Походження авто</div>
            <div className="content">
              <select
                value={filterInfo.origin}
                onChange={(e) =>
                  setFilterInfo({ ...filterInfo, origin: e.target.value })
                }
              >
                <option value="" defaultValue hidden>
                  --- Оберіть походження авто ---
                </option>
                <option value="Європа">Європа</option>
              </select>
            </div>
          </div>

          <div className="margin_filter">
            <div className="collapsible active">Місто перебування</div>
            <div className="content">
              <select
                value={filterInfo.cityCar}
                onChange={(e) =>
                  setFilterInfo({ ...filterInfo, cityCar: e.target.value })
                }
              >
                <option value="" defaultValue hidden>
                  --- Оберіть місто перебування ---
                </option>
                {cityCar.map((city) => (
                  <option>{city}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="margin_filter">
            <div className="collapsible active">Бренд</div>
            <div className="content">
              <select
                value={filterInfo.carBrand}
                onChange={(e) =>
                  setFilterInfo({ ...filterInfo, carBrand: e.target.value })
                }
              >
                <option value="" defaultValue hidden>
                  --- Оберіть бренд ---
                </option>
                {carBrand.map((brand) => (
                  <option>{brand}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="content margin_filter">
            <div>Рік</div>

            <div className="year_filter">
              <select
                value={filterInfo.yearCarFrom}
                onChange={(e) =>
                  setFilterInfo({ ...filterInfo, yearCarFrom: e.target.value })
                }
              >
                <option value="" defaultValue hidden>
                  --- Від ---
                </option>
                {yearCar.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
              <div className="input-group-between"></div>
              <select
                value={filterInfo.yearCarTo}
                onChange={(e) =>
                  setFilterInfo({ ...filterInfo, yearCarTo: e.target.value })
                }
              >
                <option value="" defaultValue hidden>
                  --- До ---
                </option>
                {yearCar.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="content margin_filter">
            <div className="collapsible">Ціна</div>
            <div className="price-group">
              <h4>від</h4>
              <input
                type="text"
                value={filterInfo.priceCarFrom}
                onChange={(e) =>
                  setFilterInfo({ ...filterInfo, priceCarFrom: e.target.value })
                }
              />
              <h4>до</h4>
              <input
                type="text"
                value={filterInfo.priceCarTo}
                onChange={(e) =>
                  setFilterInfo({ ...filterInfo, priceCarTo: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <div className="content margin_filter">
              <div className="collapsible active">Колір</div>
              <select
                value={filterInfo.colorCar}
                onChange={(e) =>
                  setFilterInfo({ ...filterInfo, colorCar: e.target.value })
                }
              >
                <option value="" defaultValue hidden>
                  --- Колір ---
                </option>
                {colorCar.map((color) => (
                  <option>{color}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="content margin_filter">
              <div className="collapsible active">Коробка</div>
              <select
                value={filterInfo.transmissionCar}
                onChange={(e) =>
                  setFilterInfo({
                    ...filterInfo,
                    transmissionCar: e.target.value,
                  })
                }
              >
                <option value="" defaultValue hidden>
                  --- Коробка ---
                </option>
                {transmissionCar.map((transmission) => (
                  <option>{transmission}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="content margin_filter">
              <div className="collapsible active">Паливо</div>
              <select
                value={filterInfo.fuelCar}
                onChange={(e) =>
                  setFilterInfo({
                    ...filterInfo,
                    fuelCar: e.target.value,
                  })
                }
              >
                <option value="" defaultValue hidden>
                  --- Паливо ---
                </option>
                {fuelCar.map((fuel) => (
                  <option>{fuel}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="search-button">
            {/* <button
              className="btn price-search-btn btn-secondary search-main-filter"
              autoComplete="off"
            >
              Пошук
            </button> */}
          </div>
        </div>
      </aside>
    </>
  );
};

export default CarBDFilter;
