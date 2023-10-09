import { Button, CircularProgress } from "@mui/material";
import React, { Fragment } from "react";

const CommonButton = ({
  title = "Button",
  variant = "contained",
  color = "primary",
  size = "medium",
  icon,
  loading,
  startIcon,
  endIcon,
  width,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      endIcon={
        loading ? (
          <CircularProgress color="primary" size={20} thickness={5} />
        ) : (
          endIcon
        )
      }
      {...props}
    >
      {title}
    </Button>
  );
};

export default CommonButton;
