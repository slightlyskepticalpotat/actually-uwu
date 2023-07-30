import React from 'react';
import Switch from '@mui/material/Switch';

interface ToggleOptionProps {
  defaultText: string;
  optionText: string;
};

const ToggleOption: React.FC<ToggleOptionProps> = ({ defaultText, optionText }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    // Check for null and if the prop exists in the object
    if (preferences && prop in preferences) {
      preferences.imperial = event.target.checked;
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
      />
      {isChecked ? optionText : defaultText}
    </div>
  );
};

export default ToggleOption;