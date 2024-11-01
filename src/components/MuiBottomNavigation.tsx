import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export default function MuiBottomNavigation() {
  const [value, setvalue] = useState(0);
  //   console.log(value);

  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(e, newValue) => {
        setvalue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Favorite"
        icon={<FavoriteIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Person"
        icon={<PersonIcon />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
}
