import React from "react";
import { getWeatherIcon } from "./constants/constants";

const HourlyForecast = ({ forecast }) => {
  return (
    <div className="forecast-container">
      {forecast.map((hour, index) => (
        <div key={index} className="forecast-box">
          <p>
            {new Date(hour.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          {hour?.weather?.[0]?.id ? (
            <img
              src={`/images/weather-icons/${getWeatherIcon(
                hour.weather[0].id
              )}`}
              alt="Weather Icon"
              className="hourly-icon"
            />
          ): null}
          <p>{Math.round(hour.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
