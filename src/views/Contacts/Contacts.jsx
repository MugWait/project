import React from "react";
import GoogleMapReact from "google-map-react";
import Avatar from "../../assets/avatar.png";
import "./contacts.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contacts = () => {
  const defaultProps = {
    center: {
      lat: 50.26200310920596,
      lng: 28.66024204540189,
    },
    zoom: 11,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 50.26200310920596, lng: 28.66024204540189 },
      map,
      title: "Hello World!",
    });
    return marker;
  };
  return (
    <div>
      <div className="container">
        <div className="cont_div">
          <div className="about_cont">
            <h1>Контакти нашого відділення</h1>
            <p>
              За весь час, на базі "Euro Car", вибудувався найбільший салон
              мультибрендових авто з Європи. В цей час ми почали займатися
              логістикою, а з 2018 року – брокерськими послугами. Згодом наша
              команда презентували високотехнологічний детейлінг та
              сертифікаційний центри, які досі не мають аналогів в Україні.
            </p>
          </div>
          <div className="contact_blocks_info">
            <div className="cont_block">
              <i className="fa fa-users fa-3x" aria-hidden="true"></i>
              <h3>Підбір авто онлайн</h3>
              <a href="tel:097 069 7949">097 069 7949</a>
              <a href="mailto:euro_car@gmail.com">euro_car@gmail.com</a>
            </div>
            <div className="cont_block">
              <i className="fa fa-users fa-3x" aria-hidden="true"></i>
              <h3>Замовити авто</h3>
              <a href="tel:096 145 2375">096 145 2375</a>
              <a href="mailto:euro_car@gmail.com">euro_car@gmail.com</a>
            </div>
            <div className="cont_block">
              <i className="fa fa-users fa-3x" aria-hidden="true"></i>
              <h3>Вартість послуг</h3>
              <a href="tel:097 032 2349">097 032 2349</a>
              <a href="mailto:euro_car@gmail.com">euro_car@gmail.com</a>
            </div>
            <div className="cont_block">
              <i className="fa fa-users fa-3x" aria-hidden="true"></i>
              <h3>Відділ продажу</h3>
              <a href="tel:093 344 1747">093 344 1747</a>
              <a href="mailto:euro_car@gmail.com">euro_car@gmail.com</a>
            </div>
            <div className="cont_block">
              <i className="fa fa-users fa-3x" aria-hidden="true"></i>
              <h3>Запчастини</h3>
              <a href="tel:097 452 9224">097 452 9224</a>
              <a href="mailto:euro_car@gmail.com">euro_car@gmail.com</a>
            </div>
            <div className="cont_block">
              <i className="fa fa-users fa-3x" aria-hidden="true"></i>
              <h3>СТО</h3>
              <a href="tel:096 234 3149">096 234 3149</a>
              <a href="mailto:euro_car@gmail.com">euro_car@gmail.com</a>
            </div>
            <div className="cont_block">
              <i className="fa fa-users fa-3x" aria-hidden="true"></i>
              <h3>Сертифікація</h3>
              <a href="tel:096 494 7237">096 494 7237</a>
              <a href="mailto:euro_car@gmail.com">euro_car@gmail.com</a>
            </div>
          </div>
          <div className="map_div">
            <h1 className="h1_map">Розташування офісу</h1>
            <div style={{ height: "370px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyC8dsccCmiCjwJMAlx5UAkFSPEvKNeAxDU&language=uk",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
              >
                <AnyReactComponent
                  lat={50.26200310920596}
                  lng={28.66024204540189}
                  icon={Avatar}
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
