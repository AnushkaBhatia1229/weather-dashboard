import axios from "axios";

// 👇 Apna Render Backend URL
const API = "https://weather-dashboard-lnoh.onrender.com/api";

// Current Weather
export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${API}/weather`, {
      params: {
        city,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 5-Day Forecast
export const getForecast = async (city) => {
  try {
    const response = await axios.get(`${API}/weather/forecast`, {
      params: {
        city,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};