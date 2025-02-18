import React from "react";

const WeatherDisplay = ({ data }) => {
  return (
    <div className="weather-display">
      {/* <h1>{data.name}</h1> */}
      <p className="weather-description">{data.weather[0].description}</p>
      <h2>Temperature {Math.round(data.main.temp)}°C</h2>
      <p className="desc"><span>Humidity</span> {data.main.humidity}% <span>Pressure</span> {data.main.pressure} </p>
    </div>
  );
};

export default WeatherDisplay;
