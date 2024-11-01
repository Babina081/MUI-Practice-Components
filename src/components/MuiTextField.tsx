import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MuiTextField() {
  const [value, setvalue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          size="small"
          color="success"
        ></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          required
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        ></TextField>
        <TextField
          label="password"
          type="password"
          helperText="Do not show your password with others"
          disabled
        ></TextField>
        <TextField
          label="password"
          type="password"
          helperText="Do not show your password with others"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
}
