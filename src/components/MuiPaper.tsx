import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

export default function MuiPaper() {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid black" }}
        direction={"row"}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
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
      </Stack>{" "}
      <Grid container my={2} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="primary.light" p={2} borderRadius={4}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="primary.light" p={2} borderRadius={4}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="primary.light" p={2} borderRadius={4}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="primary.light" p={2} borderRadius={4}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
