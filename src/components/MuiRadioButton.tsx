import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

export default function MuiRadioButton() {
  const [value, setValue] = useState("");
  console.log({ value });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl error required>
        <FormLabel id="job-description-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-description-group-label"
          onChange={handleChange}
          row
        >
          <FormControlLabel
            label="0-2"
            value="0-2"
            control={<Radio size="small" />}
          ></FormControlLabel>
          <FormControlLabel
            label="3-5"
            value="3-5"
            control={<Radio size="medium" />}
          ></FormControlLabel>
          <FormControlLabel
            label="6-10"
            value="6-10"
            control={<Radio />}
          ></FormControlLabel>
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
}
