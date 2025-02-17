import React from "react";

const HourlyForecast = ({ forecast }) => {
  return (
    <div className="forecast-container">
      {forecast.map((hour, index) => (
        <div key={index} className="forecast-box">
          <p>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
          <p>{Math.round(hour.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
