import React, { forwardRef, useState } from "react";
import Button from "@mui/material/Button";
import { Alert, AlertProps, Snackbar } from "@mui/material";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props}></Alert>;
  }
);

export default function MuiSnackbar() {
  const [open, setOpen] = useState(false);
  const handleClose = (e: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      /> */}
      {/* custom */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submitted Successfully!
        </SnackbarAlert>
      </Snackbar>
    </React.Fragment>
  );
}
