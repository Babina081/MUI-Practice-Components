import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

export default function MuiProgress() {
  return (
    <Stack spacing={2}>
      <CircularProgress></CircularProgress>
      <CircularProgress color="success"></CircularProgress>
      <CircularProgress value={60} variant="determinate"></CircularProgress>
      <LinearProgress></LinearProgress>
      <LinearProgress color="success"></LinearProgress>
      <LinearProgress value={60} variant="determinate"></LinearProgress>
    </Stack>
  );
}
