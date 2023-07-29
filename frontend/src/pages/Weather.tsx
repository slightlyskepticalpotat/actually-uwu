import { Box } from '@mui/material';
import React, { useState } from 'react';
import 'dotenv/config'

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(43.65);
  const [longitude, setLongitude] = useState(-79.38);

  const fetchWeatherData = async () => {
    try {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        // console.log(process.env.API_KEY)

        const APIREQ = "https://api.openweathermap.org/data/3.0/onecall?lat=" + latitude + "&lon="+ longitude + "&appid=c0f957daa1315f627f7244c78fc760e7"
        const response = await fetch(APIREQ);
        const jsonData = await response.json();

        console.log(jsonData)
        setWeatherData(jsonData)

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Box>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeatherData}>Get Weather</button>
      <Box>

        {weatherData? (weatherData["timezone"]) : <p>no data yet</p>}
        {weatherData ? (
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        ) : (
          <p>No data fetched yet.</p>
        )}
      </Box>
    </Box>
  );
};

export default Weather;