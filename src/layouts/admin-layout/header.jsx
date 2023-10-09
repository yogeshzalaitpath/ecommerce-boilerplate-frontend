"use client";
import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DRAWER_WIDTH } from "@/utils/constants";
import { ICONS } from "@/assets";

export default function Header({ mobileOpen, setMobileOpen }) {
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <ICONS.menu
              sx={{ fontSize: "28px", color: theme.palette.drawer.bg }}
            />
          </IconButton>
        </div>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar alt="User name" src="" sx={{ width: 38, height: 38 }}>
            U
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{ lineHeight: "20px" }}
            >
              User Name
            </Typography>
            <Typography variant="caption" sx={{ lineHeight: "20px" }}>
              username@gmail.com
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
