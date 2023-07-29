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