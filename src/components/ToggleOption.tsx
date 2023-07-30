import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';

interface ToggleOptionProps {
  defaultText: string;
  optionText: string;
  defaultOption?: boolean;
  prop: string;
};

const ToggleOption: React.FC<ToggleOptionProps> = ({ defaultText, optionText, defaultOption, prop }) => {
  const [isChecked, setIsChecked] = useState(false);
  interface UserPreferences {
    'imperial': boolean;
    'commute': string;
    'light-rain': boolean;
    'heavy-rain': boolean;
    'country-code': string;
    'city': string;
  }
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
  //console.log(localStorage.getItem('userPreferences'))

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (preferences && prop in preferences) {
      // preferences[prop] = event.target.checked;
      //console.log(preferences.imperial)
      localStorage.setItem('userPreferences', JSON.stringify(preferences))
    }
  };

  return (
    <div>
      <Switch
        checked={isChecked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        defaultChecked={defaultOption}
      />
      {isChecked ? optionText : defaultText}
    </div>
  );
};

export default ToggleOption;
