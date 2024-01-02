import { Close } from "@mui/icons-material";
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import { useState } from "react";

export default function MyAlert({ alert, type }) {
  const [open, setOpen] = useState(true);

  return (
    <Box minWidth={"35%"} position={"fixed"} bottom={70} right={50}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
          severity={type}
        >
          {alert}
        </Alert>
      </Collapse>
    </Box>
  );
}
