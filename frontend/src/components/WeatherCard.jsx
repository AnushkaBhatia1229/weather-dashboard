import {
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaCompressAlt,
} from "react-icons/fa";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="weather-card">

      {/* Left Side */}

      <div className="left">

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt="weather"
        />

        <div>

          <h2 className="city">
            {weather.name}, {weather.sys.country}
          </h2>

          <p className="date">
            {today}
          </p>

          <h1 className="temp">
            {Math.round(weather.main.temp)}°
          </h1>

          <p className="desc">
            {weather.weather[0].description}
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="right">

        <div className="info-card">

          <FaTemperatureHigh
            className="info-icon"
          />

          <div>

            <p className="info-title">
              Feels Like
            </p>

            <h3 className="info-value">
              {Math.round(weather.main.feels_like)}°C
            </h3>

          </div>

        </div>

        <div className="info-card">

          <FaTint
            className="info-icon"
          />

          <div>

            <p className="info-title">
              Humidity
            </p>

            <h3 className="info-value">
              {weather.main.humidity}%
            </h3>

          </div>

        </div>

        <div className="info-card">

          <FaWind
            className="info-icon"
          />

          <div>

            <p className="info-title">
              Wind Speed
            </p>

            <h3 className="info-value">
              {weather.wind.speed} m/s
            </h3>

          </div>

        </div>

        <div className="info-card">

          <FaCompressAlt
            className="info-icon"
          />

          <div>

            <p className="info-title">
              Pressure
            </p>

            <h3 className="info-value">
              {weather.main.pressure} hPa
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WeatherCard;