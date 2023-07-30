import React, { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SettingsIcon from '@mui/icons-material/Settings';
import ToggleOption from "./ToggleOption";
import { Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
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

const SettingsModal = () => {
  const classes = useStyles();
  interface UserPreferences {
    'imperial': boolean;
    'commute': string;
    'light-rain': boolean;
    'heavy-rain': boolean;
    'country-code': string;
    'city': string;
  }

  const [countryCode, setCountryCode] = useState("Canada");
  const [useImperial, setImperial] = useState(false);
  const [commute, setCommute] = useState("Walking");
  const [lightRain, setLightRain] = useState("Umbrella");
  const [heavyRain, setHeavyRain] = useState("Umbrella");
  const [cityCode, setCityCode] = useState("Toronto");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  useEffect(() => {
  // Retrieve the JSON string from localStorage
  const preferencesJSON = localStorage.getItem('userPreferences');

  if (preferencesJSON) {
    // Parse the JSON string back to an object
    const parsedPreferences: UserPreferences = JSON.parse(preferencesJSON);
    setPreferences(parsedPreferences);
    //console.log(preferences)
  }}, []);
  
  
  const imperial = preferences ? preferences.imperial : false;
  const commutePref = preferences ? preferences.commute : "bike";
  const lightRainPref = preferences ? preferences["light-rain"] : "Both";
  const heavyRainPref = preferences ? preferences["heavy-rain"] : "Raincoat";
  


  return (
    <div>
      <Button onClick={() => {setIsOpen(true)}}><SettingsIcon /></Button>
      <Modal
        open={isOpen}
        onClose={() => {setIsOpen(false)}}
        aria-labelledby="settings"
        className="rounded flex items-center justify-center"
        >
        <Box className="bg-white border-solid rounded p-4">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Settings
            <ToggleOption defaultText="Metric" optionText="Imperial" prop="imperial"/>
            <Autocomplete
                  options={COUNTRIES}
                  className={classes.countryField}
                  disableCloseOnSelect
                  
                  getOptionLabel={(option: CountryType) =>
                    `${option.label} (${option.code}) +${option.phone}`
                  }
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore: Object is possibly 'null'.
                  onChange = {(event, value:CountryType | null) => {
                    if (value) {
                      setCountryCode(value.code);
                      if (preferences) {
                        preferences["country-code"] = value.code;
                        //console.log(preferences)
                      }
                    }
                  }}
                  renderInput={(params) => <TextField {...params} required label="Country" />}
                />
                <Autocomplete
                    options={commuteMethod}
                    sx={{ width: 300 }}
                    onChange={(event: unknown, value: unknown) => {
                      setCommute(value as string)
                      if (preferences) {
                        preferences.commute = value as string;
                        //console.log(preferences);
                      }
                      //defaultValue = Preferences.commute;
                    }}
                    renderInput={(params) => <TextField required  {...params} 
                    label="Commute Method"
                    />}
                />
                <Autocomplete
                    disablePortal
                    options={rainProtection}
                    sx={{ width: 300 }}
                    onChange={(event: unknown, value: unknown) => {
                      setLightRain(value as string);
                      if (preferences) {
                        preferences["light-rain"] = value as string;
                        //console.log(preferences);
                      }
                    }}
                    renderInput={(params) => <TextField required {...params} 
                    label="Light Rain"
                    />}
                />
                <Autocomplete
                    options={rainProtection}
                    sx={{ width: 300 }}
                    onChange={(event: unknown, value: unknown) => {
                      setHeavyRain(value as string)
                      if (preferences) {
                        preferences["heavy-rain"] = value as string;
                        //console.log(preferences);
                      }
                    }}
                    renderInput={(params) => <TextField required {...params} 
                    label="Heavy Rain" 
                    />}
                />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;