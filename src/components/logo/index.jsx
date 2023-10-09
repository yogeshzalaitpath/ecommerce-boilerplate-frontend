import React from "react";
import { ICONS } from "@/assets";
import { Box, Typography } from "@mui/material";

export default function Logo({
  logoSize,
  fontSize,
  primaryColor,
  secondaryColor,
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <ICONS.logo sx={{ fontSize: logoSize, color: primaryColor }} />
      <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ color: primaryColor, fontSize: fontSize }}
        >
          E
        </Typography>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ color: secondaryColor, fontSize: fontSize }}
        >
          -commerce
        </Typography>
      </Box>
    </Box>
  );
}
