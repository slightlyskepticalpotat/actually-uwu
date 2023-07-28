import React from "react";
import Modal from '@mui/material/Modal';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SettingsModal() {
  const [uv, setUV] = React.useState(false);
  const [hum, setHum] = React.useState(false);
  const [temp, setTemp] = React.useState(false);
  const [units, setUnits] = React.useState(false);

  return (
    <Modal
      open={true}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="rounded flex items-center justify-center"
    >
      <Box className="bg-white rounded p-2">
        <Typography id="modal-modal-title" variant="h6" component="h2" className="p-2">
          Settings
        </Typography>
        <ToggleButton selected={uv} onChange={() => {setUV(!uv)}} className="p-1">UV Index</ToggleButton>
        <ToggleButton selected={hum} onChange={() => {setHum(!hum)}} className="p-1">Humidity</ToggleButton>
        <ToggleButton selected={temp} onChange={() => {setTemp(!temp)}} className="p-1">Temperature</ToggleButton> <br></br>
        <div className="flex items-center justify-center p-1">
          <ToggleButtonGroup 
            value={units}
            className="p-1"
            onChange={(event, newUnits) => {setUnits(newUnits)}}
            className="flex items-center justify-center"
          >
            <ToggleButton value="imperial">Imperial</ToggleButton>
            <ToggleButton value="metric">Metric</ToggleButton>
          </ToggleButtonGroup>
        </div>
        
      </Box>
    </Modal>
  )
};