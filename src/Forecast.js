import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
export default function Forecast() {
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
