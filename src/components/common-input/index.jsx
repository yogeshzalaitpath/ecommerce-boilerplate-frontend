import { Box, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function CommonInput({ label, type = "text", ...props }) {
  return (
    <Fragment>
      <Typography variant="subtitle2">{label}</Typography>
      <TextField size="small" type={type} {...props} />
    </Fragment>
  );
}
