import { Box, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function CommonInput({ label, type = "text", variant,size = "small",...props}) {
  return (
    <Fragment>
      <Typography variant="subtitle2">{label}</Typography>
      <TextField size={size} type={type} {...props} variant={variant} />
    </Fragment>
  );
}
