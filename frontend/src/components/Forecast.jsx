const Forecast = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;

  // Daily forecast (1 item per day around noon)
  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div style={{ marginTop: "40px" }}>

      <h2 className="forecast-title">
        5-Day Forecast
      </h2>

      <div className="forecast-grid">

        {dailyForecast.slice(0, 5).map((day, index) => {

          const date = new Date(day.dt_txt);

          const weekDay = date.toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <div
              className="forecast-card"
              key={index}
            >

              <div className="day">
                {weekDay}
              </div>

              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="weather"
              />

              <div className="max">
                {Math.round(day.main.temp_max)}°
              </div>

              <div className="min">
                {Math.round(day.main.temp_min)}°
              </div>

              <div className="forecast-desc">
                {day.weather[0].main}
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default Forecast;