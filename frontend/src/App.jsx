import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Highlights from "./components/Highlights";
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
      const forecastData = await getForecast(city);

      setWeather(current.data);
      setForecast(forecastData.data);
    } catch (error) {
      alert("City Not Found");
    }
  };

  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <main className="flex-1 ml-72 p-8">

        <Navbar />

        <div className="mt-8">
          <SearchBar onSearch={searchWeather} />
        </div>

        {weather && (
          <>
            <div className="grid lg:grid-cols-3 gap-8 mt-10">

              <div className="lg:col-span-2">
                <WeatherCard weather={weather} />
              </div>

              <div>
                <Highlights weather={weather} />
              </div>

            </div>

            <div className="mt-10">
              <Forecast forecast={forecast} />
            </div>
          </>
        )}

      </main>

    </div>
  );
}

export default App;