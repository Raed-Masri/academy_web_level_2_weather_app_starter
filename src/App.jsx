import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import SearchBar from "./Search";
import HourlyForecast from "./HourlyForecast";
import "./index.css";

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
    const backgrounds = {
      Clear: "#4a90e2",
      Clouds: "#7f8c8d",
      Rain: "#2c3e50",
      Snow: "#ecf0f1",
      Thunderstorm: "#34495e",
      Drizzle: "#3498db",
      Mist: "#95a5a6",
      Fog: "#7f8c8d",
    };
    setBackground(backgrounds[condition] || "#1e3a8a");
  };
  const updateIcon = (weatherId) => {
    if (weatherId < 300) setWeatherIcon("storm.svg");
    else if (weatherId >= 300 && weatherId < 500) setWeatherIcon("drizzle.svg");
    else if (weatherId >= 500 && weatherId < 600) setWeatherIcon("rain.svg");
    else if (weatherId >= 600 && weatherId < 700) setWeatherIcon("snow.svg");
    else if (weatherId >= 700 && weatherId < 800) setWeatherIcon("fog.svg");
    else if (weatherId === 800) setWeatherIcon("clear.svg");
    else if (weatherId === 801) setWeatherIcon("partlycloudy.svg");
    else if (weatherId > 801 && weatherId <= 805)
      setWeatherIcon("mostlycloudy.svg");
  };
  return (
    <div className="app-container" style={{ backgroundColor: background }}>
      <div className="content-container">
        <SearchBar updateWeather={updateWeather} />
        {weatherData && (
          <div>
            <img
              src={`./images/weather-icons/${weatherIcon}`}
              alt="Weather Icon"
              className="weather-icon"
            />
            <WeatherDisplay data={weatherData} />
          </div>
        )}
        {forecastData.length > 0 && <HourlyForecast forecast={forecastData} />}
      </div>
    </div>
  );
};

export default App;
