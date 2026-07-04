import axios from "axios";

const API =
  "https://weather-dashboard-lnoh.onrender.com/api/weather";

export const getWeather = async (city) => {
  const response = await axios.get(`${API}?city=${city}`);
  return response.data;
};

export const getForecast = async (city) => {
  const response = await axios.get(`${API}/forecast?city=${city}`);
  return response.data;
};