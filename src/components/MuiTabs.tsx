import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MuiTabs() {
  const [value, setvalue] = useState("1");
  const handleChange = (e: React.SyntheticEvent | Event, newValue: string) => {
    setvalue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          {" "}
          <TabList
            aria-label="Tabs Example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            // centered
            variant="scrollable"
            scrollButtons="auto"
          >
            {" "}
            <Tab
              label="Tab 1"
              value={"1"}
              icon={<FavoriteIcon />}
              iconPosition="start"
            ></Tab>
            <Tab label="Tab 2" value={"2"} disabled></Tab>
            <Tab label="Tab 3" value={"3"}></Tab>
            <Tab label="Tab 4" value={"4"}></Tab>
            <Tab label="Tab 5" value={"5"}></Tab>
          </TabList>{" "}
        </Box>
        <TabPanel value={"1"}>Panel 1 one</TabPanel>
        <TabPanel value={"2"}>Panel 2 two</TabPanel>
        <TabPanel value={"3"}>Panel 3 three</TabPanel>
        <TabPanel value={"4"}>Panel 4 four</TabPanel>
        <TabPanel value={"5"}>Panel 5 five</TabPanel>
      </TabContext>
    </Box>
  );
}
