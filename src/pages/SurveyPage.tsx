import {
  Autocomplete,
  Box,
  Button,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useState } from "react";
import COUNTRIES from "~/components/CountrySelect";
import CountryType from "~/components/CountrySelect";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  submitButton: {
    width: "15%",
    padding: "1rem 2rem",
    borderRadius: "1rem",
    backgroundColor: "#546D64",
    "&:hover": {
      backgroundColor: "#3a4742",
    },
  },
  countryField: {
    width: "18vw",
  },
});

interface userPreferences {
  imperial: boolean;
  commute: string;
  "light-rain": string;
  "heavy-rain": string;
  "country-code": string;
  city: string;
}

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

const commuteMethod = [
  { label: "Walking" },
  { label: "Cycling" },
  { label: "Transit" },
  { label: "Driving" },
];

const rainProtection = [
  { label: "Nothing" },
  { label: "Raincoat" },
  { label: "Umbrella" },
  { label: "Both" },
];

const SurveyPage = () => {
  const classes = useStyles();
  const router = useRouter();

  const [countryCode, setCountryCode] = useState("Canada");
  const [useImperial, setImperial] = useState(false);
  const [commute, setCommute] = useState("Walking");
  const [lightRain, setLightRain] = useState("Umbrella");
  const [heavyRain, setHeavyRain] = useState("Umbrella");
  const [cityCode, setCityCode] = useState("Toronto");

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        event.preventDefault();
    
        const preferences: userPreferences = {
          'imperial': useImperial,
          'commute': commute,
          'light-rain': lightRain,
          'heavy-rain': heavyRain,
          'country-code': countryCode,
          'city': cityCode
        };
    
        // Convert the preferences object to a JSON string
        const preferencesJSON = JSON.stringify(preferences);

        // Store the JSON string in localStorage
        localStorage.setItem('userPreferences', preferencesJSON);


        router.push("/Weather")
      }
    return (
        <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}>
        <Box className={classes.container}>
          <Box className={classes.root}>
              <Typography variant="subtitle1"><em>First question! What country are you from?</em></Typography>
                <Autocomplete
                  options={COUNTRIES}
                  className={classes.countryField}
                  disableCloseOnSelect
                  
                  getOptionLabel={(option: CountryType) =>
                    `${option.label} (${option.code}) +${option.phone}`
                  }
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore: Object is possibly 'null'.
                  onChange = {(event, value:CountryType | null) => setCountryCode(value.code)}
                  renderInput={(params) => <TextField {...params} required label="Choose a country" />}
                />
            </Box>
            <Box className={classes.root}>
            <Typography variant="subtitle1"><em>What city are you from?</em></Typography>
              <TextField 
              label="City" 
              variant="outlined" 
              required
              onChange={(event) => setCityCode(event.target.value)}
              /> 
            </Box>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>Do you use the Metric or Imperial system when measuring temperatures?</em></Typography>
                <Box>
                    Metric (C°) <Switch onChange={(e, v) => {setImperial(v)
                    console.log(v)
                    }}/> Imperial (F°) 
                </Box>
            </Box>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>What is your preferred method of commute?</em></Typography>
                <Autocomplete
                    disablePortal
                    options={commuteMethod}
                    sx={{ width: 300 }}
                    onChange={(event: unknown, value: unknown) => setCommute(value as string)}
                    renderInput={(params) => <TextField required  {...params} 
                    label="Commute Method" 
                    />}
                />
            </Box>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>How do you protect yourself when it&apos;s raining?</em></Typography>
                <Autocomplete
                    disablePortal
                    options={rainProtection}
                    sx={{ width: 300 }}
                    onChange={(event: unknown, value: unknown) => setLightRain(value as string)}
                    renderInput={(params) => <TextField required {...params} 
                    label="Light Rain" 
                    />}
                />
                <Autocomplete
                    disablePortal
                    options={rainProtection}
                    sx={{ width: 300 }}
                    onChange={(event: unknown, value: unknown) => setHeavyRain(value as string)}
                    renderInput={(params) => <TextField required {...params} 
                    label="Heavy Rain" 
                    />}
                />
            </Box>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>Are you ready to generate your results?</em></Typography>
                <Button className={classes.submitButton} variant="contained" type="submit">Generate</Button>
            </Box>
            </Box>
        </form>
    )
}

export default SurveyPage;
