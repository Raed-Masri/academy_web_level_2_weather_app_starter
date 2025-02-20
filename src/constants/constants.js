const BACKGROUNDS = {
  Clear: "#4a90e2",
  Clouds: "#7f8c8d",
  Rain: "#2c3e50",
  Snow: "#ecf0f1",
  Thunderstorm: "#34495e",
  Drizzle: "#3498db",
  Mist: "#95a5a6",
  Fog: "#7f8c8d",
};

const getWeatherIcon = (weatherId) => {
  if (weatherId < 300) return "storm.svg";
  else if (weatherId >= 300 && weatherId < 500) return "drizzle.svg";
  else if (weatherId >= 500 && weatherId < 600) return "rain.svg";
  else if (weatherId >= 600 && weatherId < 700) return "snow.svg";
  else if (weatherId >= 700 && weatherId < 800) return "fog.svg";
  else if (weatherId === 800) return "clear.svg";
  else if (weatherId === 801) return "partlycloudy.svg";
  else if (weatherId > 801 && weatherId <= 805)
    return "mostlycloudy.svg";

};

export { BACKGROUNDS, getWeatherIcon };
