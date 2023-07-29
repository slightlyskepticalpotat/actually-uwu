/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/dot-notation */
import { Autocomplete, Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import 'dotenv/config'
import COUNTRIES from '~/components/CountrySelect';
import CountryType from '~/components/CountrySelect';
import Outfit from '~/components/Outfit';


//https://api.openweathermap.org/geo/1.0/zip?zip=L6Y4W6,CA&appid=c0f957daa1315f627f7244c78fc760e7
//


interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(43.65);
  const [longitude, setLongitude] = useState(-79.38);
  const [countryCode, setCountryCode] = useState("")

  const fetchWeatherData = async () => {
    try {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        // console.log(process.env.API_KEY)

        const APIREQ = "https://api.openweathermap.org/data/3.0/onecall?lat=" + latitude + "&lon="+ longitude + "&appid=c0f957daa1315f627f7244c78fc760e7"
        const response = await fetch(APIREQ);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const jsonData = await response.json();

        console.log(jsonData)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setWeatherData(jsonData)

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };


  return (
    <Box>
      <Autocomplete
        options={COUNTRIES}
        disableCloseOnSelect
        getOptionLabel={(option: CountryType) =>
          `${option.label} (${option.code}) +${option.phone}`
        }
        // onChange={(event, value:CountryType) => setCountryCode(value.code)}
        renderInput={(params) => <TextField {...params} label="Choose a country" />}
      />
      <Box>
        Country Code: {countryCode}
      </Box>
      <button onClick={fetchWeatherData}>Get Weather</button>
      <Box>

        {weatherData? (weatherData["timezone"]) : <p>no data yet</p>}
        {weatherData ? (
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        ) : (
          <p>No data fetched yet.</p>
        )}
      </Box>
      <Outfit/>
    </Box>

  );
};

export default Weather;