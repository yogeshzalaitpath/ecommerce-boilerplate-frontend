"use client";
import React, { Fragment } from "react";
import Header from "./header";
import { Box } from "@mui/material";
import { DRAWER_WIDTH, HEADER_HEIGHT } from "@/utils/constants";
import SideBar from "./side-bar";

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Fragment>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Box display="flex">
        <SideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <Box
          sx={{
            width: { xs: "100%", sm: `calc(100% - ${DRAWER_WIDTH}px)` },
            marginTop: `${HEADER_HEIGHT}px`,
            p: { xs: 1, sm: 1.5 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Fragment>
  );
}
