import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";

const CommonSelect = ({
  size = "small",
  label,
  placeholder,
  value,
  options,
  error,
  ...props
}) => {
  return (
    <Box>
      <Typography variant="subtitle2">{label}</Typography>
      <FormControl size={size} error={Boolean(error)} fullWidth>
        <Select
          value={value}
          displayEmpty
          renderValue={() =>
            options.find((option) => option.value === value)?.title ||
            placeholder
          }
          {...props}
        >
          {options.map((option, key) => (
            <MenuItem key={key} value={option.value}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
        {Boolean(error) && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default CommonSelect;
