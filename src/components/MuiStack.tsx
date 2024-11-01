import { Box, Divider, Stack } from "@mui/material";
import React from "react";

export default function MuiStack() {
  return (
    <Stack sx={{border:'1px solid black'}} direction={"row"} spacing={2} divider={<Divider orientation="vertical" flexItem/>} >
      <Box
        // component={"span"}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        MuiBox
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </Stack>
  );
}
