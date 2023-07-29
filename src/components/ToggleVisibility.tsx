import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface ToggleVisibilityProps {
  text: string;
  defaultChecked: boolean
};

const ToggleVisibility: React.FC<ToggleVisibilityProps> = ({ text, defaultChecked }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  }

  return (
    <div>
      <FormControlLabel control={<Checkbox defaultChecked={isChecked} onChange={handleChange} />} className="p-1" label={text} />
    </div>
  );
};

export default ToggleVisibility;