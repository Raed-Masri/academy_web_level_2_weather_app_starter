import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import SearchBar from "./Search";
import HourlyForecast from "./HourlyForecast";
import "./index.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [background, setBackground] = useState("#1e3a8a");

  const updateWeather = (data, forecast) => {
    setWeatherData(data);
    setForecastData(forecast);
    updateBackground(data.weather[0].main);
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

  return (
    <div className="app-container" style={{ backgroundColor: background }}>
      <div className="content-container">
        <SearchBar updateWeather={updateWeather} />
        {weatherData && <WeatherDisplay data={weatherData} />}
        {forecastData.length > 0 && <HourlyForecast forecast={forecastData} />}
      </div>
    </div>
  );
};

export default App;
