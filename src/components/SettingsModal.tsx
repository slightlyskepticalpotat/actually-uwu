import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleVisibility from "./ToggleVisibility";
import Button from "@mui/material/Button";
import SettingsIcon from '@mui/icons-material/Settings';
import ToggleOption from "./ToggleOption";

const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
            <ToggleVisibility text="Temperature" defaultChecked={true} />
            <ToggleVisibility text="UV" defaultChecked={true} />
            <ToggleVisibility text="Humidity" defaultChecked={false} />
            <ToggleOption defaultText="Celsius" optionText="Fahrenheit" />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;