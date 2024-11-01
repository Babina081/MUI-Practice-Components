import { Badge, Stack } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

export default function MuiBadge() {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      {" "}
      <Badge badgeContent={5} color="primary">
        {" "}
        <MailIcon></MailIcon>
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        {" "}
        <MailIcon></MailIcon>
      </Badge>
      <Badge badgeContent={100} color="primary">
        {" "}
        <MailIcon></MailIcon>
      </Badge>
      <Badge badgeContent={100} color="primary" max={999}>
        {" "}
        <MailIcon></MailIcon>
      </Badge>
      <Badge variant="dot" color="primary">
        {" "}
        <MailIcon></MailIcon>
      </Badge>
      <Badge variant="dot" color="primary" invisible={true}>
        {" "}
        <MailIcon></MailIcon>
      </Badge>
    </Stack>
  );
}
