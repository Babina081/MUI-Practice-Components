import { DateRange } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import React, { useState } from "react";

export default function MuiDateRangePicker() {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  return (
    <Box width={"500px"}>
      {" "}
      <DateRangePicker
        value={value}
        onChange={(newValue: DateRange<Date>) => setValue(newValue)}
        slotProps={{
            textField: {
              label: 'Select dates',
              fullWidth: true,
            },
          }}
      ></DateRangePicker>{" "}
    </Box>
  );
}
