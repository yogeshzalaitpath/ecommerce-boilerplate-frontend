import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { Fragment } from "react";

const CommonSelect = ({ size = "small", label, value, options, ...porps }) => {
  return (
    <Fragment>
      <Typography variant="subtitle2">{label}</Typography>
      <FormControl size={size}>
        <Select
          value={value}
          displayEmpty
          renderValue={()=> options.find((option) => option.value === value)?.title || "Select Role"}
          {...porps}
        >
          {options.map((option, key) => (
            <MenuItem key={key} value={option.value}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default CommonSelect;
