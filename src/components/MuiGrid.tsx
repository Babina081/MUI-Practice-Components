import { Box, Grid } from "@mui/material";
import React from "react";

export default function MuiGrid() {
  return (
    <Grid container my={2} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={12} sm={6} md={4} lg={3}><Box bgcolor='primary.light' p={2} borderRadius={4} >Item 1</Box></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><Box bgcolor='primary.light' p={2} borderRadius={4} >Item 2</Box></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><Box bgcolor='primary.light' p={2} borderRadius={4} >Item 3</Box></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><Box bgcolor='primary.light' p={2} borderRadius={4} >Item 4</Box></Grid>
    </Grid>
  );
}
