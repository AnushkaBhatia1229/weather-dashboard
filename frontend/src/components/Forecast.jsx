const Forecast = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;

  const daily = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <h2 className="text-white text-3xl font-bold mb-6">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

        {daily.map((day) => (
          <div
            key={day.dt}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/20 text-center text-white"
          >
            <h3 className="font-bold">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h3>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt=""
              className="mx-auto"
            />

            <p className="text-2xl font-bold">
              {Math.round(day.main.temp)}°
            </p>

            <p className="capitalize text-sm">
              {day.weather[0].description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Forecast;