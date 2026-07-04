import { useState } from "react";
import "./index.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

import {
  getWeather,
  getForecast,
} from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const searchWeather = async (city) => {
    try {
      const current = await getWeather(city);
      const next = await getForecast(city);

      setWeather(current.data);
      setForecast(next.data);
    } catch (error) {
      alert("City Not Found");
    }
  };

  return (
    <div className="app">

      <div className="container">

        <header>

          <h1>
            🌤 Weather Dashboard
          </h1>

          <p>
            Get real-time weather information for any city
          </p>

        </header>

        <SearchBar
          onSearch={searchWeather}
        />

        {weather && (

          <>
            <WeatherCard weather={weather} />

            <Forecast forecast={forecast} />
          </>

        )}

        <footer>

          © 2026 Weather Dashboard.
          All rights reserved.

        </footer>

      </div>

    </div>
  );
}

export default App;