import { Box, Drawer, IconButton, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export default function MuiDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
        sx={{ m:2}}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          width={"250px"}
          textAlign={"center"}
          role="presentation"
          bgcolor={"red"}
        >
          <Typography variant="h6" component={"div"}>
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
