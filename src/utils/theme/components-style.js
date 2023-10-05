export const componentsStyle = (theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 6,
          color: theme.palette.common.white,
        },
        text: {
          color: "red",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,.05)",
            color: theme.palette.common.white,
          },
          "&.active": {
            backgroundColor: "rgba(255,255,255,.05)",
            color: theme.palette.common.white,
          },
          span: {
            fontSize: 15,
          },
          ".MuiListItemIcon-root": {
            minWidth: "43px",
          },
        },
      },
    },
  };
};
