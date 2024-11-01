import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TimePicker from "@mui/lab";
import React, { useState } from "react";
import { DateTimePicker, TimePickerToolbar } from "@mui/x-date-pickers";

export default function MuiPicker() {
  const [selectedDate, setselectedDate] = useState<Date | null>(null);
  const [selectedTime, setselectedTime] = useState<Date | null>(null);
  console.log({ selectedDate });

  return (
    <Stack spacing={4} sx={{ width: "250px" }} m={5}>
      <DatePicker
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue: Date | null) => setselectedDate(newValue)}
        //used instead of renderInput
        slotProps={{ textField: { fullWidth: true } }}
      ></DatePicker>
      <DateTimePicker
        label="Time Picker"
        value={selectedTime}
        onChange={(newValue: Date | null) => setselectedTime(newValue)}
        //used instead of renderInput
        slotProps={{ textField: { fullWidth: true } }}
      ></DateTimePicker>
    </Stack>
  );
}
