import React from "react";

const WeatherDisplay = ({ data }) => {
  return (
    <div className="weather-display">
      <h1>{data.name}</h1>
      <p className="weather-description">{data.weather[0].description}</p>
      <h2>{Math.round(data.main.temp)}°C</h2>
      <p>Humidity: {data.main.humidity}% | Pressure: {data.main.pressure} hPa</p>
    </div>
  );
};

export default WeatherDisplay;
