import { Button } from "@mui/material";
import React, { Fragment } from "react";

const CommonButton = ({
  title,
  variant,
  color,
  size,
  icon,
  loading,
  startIcon,
  width,
  ...props
}) => {
  return (
      <Button
        variant={variant || "contained"}
        color={color || "primary"}
        size={size || "medium"}
        {...props}
        disabled={loading}
        startIcon={startIcon}
        // sx={{width:width}}
      >
        {title}
      </Button>
  );
}

export default CommonButton;
