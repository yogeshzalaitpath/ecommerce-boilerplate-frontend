import { Box, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function CommonInput({ placeholder, title, sx, type, ...props }) {
  return (
    <Fragment>
      <Typography variant="subtitle2">{title}</Typography>
      <TextField placeholder={placeholder} size="small" type={type} />
    </Fragment>
  );
}
