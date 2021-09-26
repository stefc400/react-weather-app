import React from "react";
import FormattedDate from "./FormattedDate";
import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-3">
              <UnitConversion celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
