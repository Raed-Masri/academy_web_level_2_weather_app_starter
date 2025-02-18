import React, { useState } from "react";

const SearchBar = ({ updateWeather }) => {
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    const apiKey = "ac1ee19d6a4008e44838765e5e0c81dc";
    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const weatherData = await weatherRes.json();

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      const forecastData = await forecastRes.json();

      if (weatherData.cod !== 200 || forecastData.cod !== "200") {
        alert("City not found. Please enter a valid city name.");
        return;
      }

      updateWeather(weatherData, forecastData.list.slice(0, 8));
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <nav>
      <input
        type="text"
        placeholder="Type in a city name..."
        className="search-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather} className="search-button">
        Find Weather
      </button>
    </nav>
  );
};

export default SearchBar;
