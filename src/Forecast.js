import React from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
export default function Forecast(props) {
  function handleResponse(response) {}
  let apiKey = "a645ddc35d018afa1d3fa1a0f4af84a5";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day"> Thu </div>
          <WeatherIcon code="01d" size={36} />
          <div className="Forecast-temperatures">
            <span className="Forecast-temperature-max">19° </span>
            <span className="Forecast-temperature-min"> 10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
