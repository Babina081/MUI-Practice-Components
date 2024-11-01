import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

export default function MuiList() {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      {" "}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar >
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List Item 1"
              secondary="Secondary text"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary="List Item 2"
            secondary="Secondary text"
          ></ListItemText>
        </ListItem>
        <Divider></Divider>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary="List Item 3"
            secondary="Secondary text"
          ></ListItemText>
        </ListItem>
      </List>{" "}
    </Box>
  );
}
