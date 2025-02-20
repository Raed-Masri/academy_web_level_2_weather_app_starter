import React, { useCallback, useRef, useState } from "react";
import { useEffect } from "react";

import debounce from "lodash/debounce";

const SearchBar = ({ updateWeather }) => {
  const [city, setCity] = useState("london");
  const inputRef = useRef(null);

  const fetchWeather = async (city) => {
    const apiKey = "ac1ee19d6a4008e44838765e5e0c81dc";
    console.log({ city });

    try {
      Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        ),
      ])
        .then((responses) => {
          return Promise.all(responses.map((response) => response.json()));
        })
        .then((data) => {
          console.log("All responses:", data);

          let [weatherData, forecastData] = data;
          console.log({ weatherData, forecastData });

          // if (weatherData.cod !== 200 || forecastData.cod !== "200") {
          //   alert("City not found. Please enter a valid city name.");
          //   return;
          // }
          // inputRef.current.focus();
          updateWeather(weatherData, forecastData.list.slice(0, 8));
        })
        .catch((err) => {});
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const debouncedFetchWeather = useCallback(
    debounce((city) => fetchWeather(city), 800),
    []
  );

  useEffect(() => {
    debouncedFetchWeather(city);
  }, [city]);

  return (
    <nav>
      <input
        type="text"
        ref={inputRef}
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
