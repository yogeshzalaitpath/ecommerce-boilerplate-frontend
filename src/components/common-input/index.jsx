import { Box, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function CommonInput({
  label,
  type = "text",
  variant = "outlined",
  size = "small",
  error,
  ...props
}) {
  return (
    <Box>
      <Typography variant="subtitle2">{label}</Typography>
      <TextField
        fullWidth
        size={size}
        type={type}
        variant={variant}
        error={Boolean(error)}
        helperText={error}
        {...props}
      />
    </Box>
  );
}
