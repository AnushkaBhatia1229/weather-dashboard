import {
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaEye,
  FaCloud,
  FaMapMarkerAlt,
} from "react-icons/fa";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="w-full">

      <div className="relative overflow-hidden rounded-[35px] border border-white/20 bg-white/10 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-8">

        {/* Glow */}

        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl"></div>

        {/* Location */}

        <div className="relative flex justify-between items-center">

          <div>

            <div className="flex items-center gap-2 text-gray-200">

              <FaMapMarkerAlt className="text-red-400" />

              <span className="text-lg">
                {weather.name}, {weather.sys.country}
              </span>

            </div>

            <h2 className="text-6xl font-bold text-white mt-3">
              {Math.round(weather.main.temp)}°
            </h2>

            <p className="capitalize text-cyan-200 text-xl mt-2">
              {weather.weather[0].description}
            </p>

          </div>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="weather"
            className="w-44 h-44 drop-shadow-2xl animate-pulse"
          />

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 my-8"></div>

        {/* Weather Details */}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

          <div className="bg-white/10 rounded-2xl p-5 text-center hover:bg-white/20 transition">

            <FaTemperatureHigh className="mx-auto text-3xl text-orange-400 mb-3" />

            <p className="text-sm text-gray-300">
              Feels Like
            </p>

            <h3 className="text-xl font-bold text-white">
              {Math.round(weather.main.feels_like)}°C
            </h3>

          </div>

          <div className="bg-white/10 rounded-2xl p-5 text-center hover:bg-white/20 transition">

            <FaTint className="mx-auto text-3xl text-cyan-300 mb-3" />

            <p className="text-sm text-gray-300">
              Humidity
            </p>

            <h3 className="text-xl font-bold text-white">
              {weather.main.humidity}%
            </h3>

          </div>

          <div className="bg-white/10 rounded-2xl p-5 text-center hover:bg-white/20 transition">

            <FaWind className="mx-auto text-3xl text-green-300 mb-3" />

            <p className="text-sm text-gray-300">
              Wind
            </p>

            <h3 className="text-xl font-bold text-white">
              {weather.wind.speed} m/s
            </h3>

          </div>

          <div className="bg-white/10 rounded-2xl p-5 text-center hover:bg-white/20 transition">

            <FaEye className="mx-auto text-3xl text-purple-300 mb-3" />

            <p className="text-sm text-gray-300">
              Visibility
            </p>

            <h3 className="text-xl font-bold text-white">
              {weather.visibility / 1000} km
            </h3>

          </div>

          <div className="bg-white/10 rounded-2xl p-5 text-center hover:bg-white/20 transition">

            <FaCloud className="mx-auto text-3xl text-gray-200 mb-3" />

            <p className="text-sm text-gray-300">
              Clouds
            </p>

            <h3 className="text-xl font-bold text-white">
              {weather.clouds.all}%
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WeatherCard;