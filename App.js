import React, { useState } from "react";

import { fetchWeather } from "./api fetch/api";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="container">
          <div className="box">
            <div className="card" id="city">
              <h2 className="name">
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
              </h2>
            </div>
            <div className="card" id="temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="card" id="info">
              <img
                className="icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />

              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
