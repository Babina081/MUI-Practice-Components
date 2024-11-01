import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";

export default function MuiChips() {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction={"row"} spacing={1} m={4}>
      <Chip label="Chip" color="primary" size="medium"></Chip>
      <Chip
        label="Chip"
        color="primary"
        size="medium"
        icon={<FaceIcon />}
      ></Chip>
      <Chip
        label="Chip outlined"
        color="secondary"
        variant="outlined"
        size="medium"
        avatar={<Avatar>BG</Avatar>}
      ></Chip>
      <Chip
        label="Click"
        color="success"
        onClick={() => alert("clicked")}
      ></Chip>
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("clicked")}
        onDelete={() => alert("deleted")}
      ></Chip>
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onDelete={() => handleDelete(chip)}
        ></Chip>
      ))}
    </Stack>
  );
}
