"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { DRAWER_WIDTH } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENUITEMS } from "@/utils/urls";
import Logo from "@/components/logo";
import { useTheme } from "@mui/material/styles";

function SideBar({ mobileOpen, setMobileOpen, ...props }) {
  const pathname = usePathname();
  const theme = useTheme();
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo
          logoSize="30px"
          primaryColor={theme.palette.primary.light}
          secondaryColor={theme.palette.common.white}
        />
      </Toolbar>
      <Divider />
      <List>
        {MENUITEMS.map(({ id, label, icon, path }) => {
          return (
            <Link href={path} key={id} sx={{ py: { xs: 0.5, sm: 0.5 } }}>
              <ListItem
                key={id}
                sx={{
                  display: "block",
                  px: { xs: 1.5, sm: 1.5 },
                  py: { xs: 0.5, sm: 0.5 },
                }}
              >
                <ListItemButton
                  selected={pathname === path}
                  onClick={handleDrawerToggle}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </React.Fragment>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
