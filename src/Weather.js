import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Paris</h1>
      <ul>
        <li>Wednesday 12:00</li>
        <li>Clear sky</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
              ></img>
            </div>
            <div className="col-3">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
