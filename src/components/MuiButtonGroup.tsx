import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";

export default function MuiButtonGroup() {
  return (
    <div>
      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label='alignment button group'>
        <Button onClick={()=>alert('left click')}>Left</Button>
        <Button onClick={()=>alert('center click')}>Center</Button>
        <Button onClick={()=>alert('right click')}>Right</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
}
