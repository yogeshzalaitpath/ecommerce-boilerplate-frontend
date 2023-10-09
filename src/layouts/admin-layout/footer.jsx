import { FOOTER_HEIGHT } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: `${FOOTER_HEIGHT}px`,
        bgcolor: theme.palette.common.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="caption">
        Copyright © 2023{" "}
        <Typography variant="caption" color="primary">
          E-commerce
        </Typography>
        . All right reserved
      </Typography>
    </Box>
  );
}
