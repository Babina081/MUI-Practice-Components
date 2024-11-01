import { Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function MuiLink() {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#" variant="body2">Link</Link>{" "}
      <Link href="#" color="secondary" underline="hover">
        Link
      </Link>{" "}
      <Link href="#" color="secondary" underline="none">
        Link
      </Link>{" "}
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Link
        </Link>{" "}
      </Typography>
    </Stack>
  );
}
