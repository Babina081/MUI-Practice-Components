import { Box } from "@mui/material";
import React from "react";

export default function MuiResponsiveness() {
  return (
    <Box
      sx={{
        height: "300px",
        width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        bgcolor: {xs:"primary.main",lg:'primary.light'},
      }}
    >
      MuiResponsiveness
    </Box>
  );
}
