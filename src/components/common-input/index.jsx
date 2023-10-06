import { Box, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function CommonInput({ label, type = "text", ...props }) {
  return (
    <Box>
      <Typography variant="subtitle2">{label}</Typography>
      <TextField
        size="small"
        fullWidth
        type={type}
        error={Boolean(props.error)}
        helperText={props.error}
        {...props}
      />
    </Box>
  );
}
