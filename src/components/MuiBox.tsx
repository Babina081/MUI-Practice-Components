import { Box } from "@mui/material";
import React from "react";

export default function MuiBox() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
