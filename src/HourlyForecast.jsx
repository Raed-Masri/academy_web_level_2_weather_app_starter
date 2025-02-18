import React from "react";

const HourlyForecast = ({ forecast }) => {
  const getWeatherIcon = (weatherId) => {
    if (weatherId < 300) return "storm.svg";
    else if (weatherId >= 300 && weatherId < 500) return "drizzle.svg";
    else if (weatherId >= 500 && weatherId < 600) return "rain.svg";
    else if (weatherId >= 600 && weatherId < 700) return "snow.svg";
    else if (weatherId >= 700 && weatherId < 800) return "fog.svg";
    else if (weatherId === 800) return "clear.svg";
    else if (weatherId === 801) return "partlycloudy.svg";
    else if (weatherId > 801 && weatherId <= 805) return "mostlycloudy.svg";
    return "clear.svg";
  };
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
          <img
            src={`/images/weather-icons/${getWeatherIcon(hour.weather[0].id)}`}
            alt="Weather Icon"
            className="hourly-icon"
          />
          <p>{Math.round(hour.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
