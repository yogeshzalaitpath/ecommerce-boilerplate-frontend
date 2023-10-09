"use client";
import React, { Fragment } from "react";
import Header from "./header";
import { Box } from "@mui/material";
import { DRAWER_WIDTH, FOOTER_HEIGHT, HEADER_HEIGHT } from "@/utils/constants";
import SideBar from "./side-bar";
import Footer from "./footer";

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
          }}
        >
          <Box
            sx={{
              p: { xs: 1, sm: 1.5 },
              minHeight: `calc(100vh - (${HEADER_HEIGHT}px + ${FOOTER_HEIGHT}px))`,
            }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
    </Fragment>
  );
}
