import { Box } from '@mui/material';
import React, { useState } from 'react';

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [latitude, setLatitude] = useState(43.653226);
  const [longitude, setLongitude] = useState(-79.383184);

  const fetchWeatherData = async () => {
    try {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`, options)
          .then(response => response.json())
          .then(response => {setWeatherData(response)
                            console.log(response)})
          .catch(err => console.error(err));
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

      {weatherData && (
        <Box>
            {weatherData.message}
        </Box>
      )}
    </Box>
  );
};

export default Weather;