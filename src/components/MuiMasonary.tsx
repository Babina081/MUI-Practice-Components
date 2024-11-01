import { Masonry } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const heights = [
  150, 30, 90, 70, 110, 150, 90, 70, 110, 150, 30, 90, 70, 110, 150,
];

export default function MuiMasonary() {
  return (
    <Box sx={{ width: 500, maxHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              border: "1px solid",
            }}
          >
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={`panel-header-${index}`} // Adding unique id
              >
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails aria-labelledby={`panel-header-${index}`}>
                Content
              </AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}
