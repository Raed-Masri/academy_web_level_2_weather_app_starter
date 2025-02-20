import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import SearchBar from "./Search";
import HourlyForecast from "./HourlyForecast";
import "./index.css";
import { BACKGROUNDS, getWeatherIcon } from "./constants/constants";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [background, setBackground] = useState("#1e3a8a");
  const [weatherIcon, setWeatherIcon] = useState("clear.svg");

  const updateWeather = (data, forecast) => {
    setWeatherData(data);
    setForecastData(forecast);
    updateBackground(data.weather[0].main);
    updateIcon(data.weather[0].id);
  };

  const updateBackground = (condition) => {
    setBackground(BACKGROUNDS[condition] || "#1e3a8a");
  };

  const updateIcon = (weatherId) => {
    const WeatherIcon = getWeatherIcon(weatherId);
    setWeatherIcon(WeatherIcon);
  };
  return (
    <div className="app-container" style={{ backgroundColor: background }}>
      <div className="content-container">
        <SearchBar updateWeather={updateWeather} />
        {weatherData ? (
          <div>
            {weatherIcon && (
              <img
                src={`./images/weather-icons/${weatherIcon}`}
                alt="Weather Icon"
                className="weather-icon"
              />
            )}
            <WeatherDisplay data={weatherData} />
          </div>
        ) : null}
        {forecastData.length > 0 && <HourlyForecast forecast={forecastData} />}
      </div>
    </div>
  );
};

export default App;
