export const componentsStyle = (theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 6,
          color: theme.palette.common.white,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          ".MuiListItemButton-root.Mui-selected": {
            backgroundColor: "rgba(255,255,255,.05)",
            color: theme.palette.common.white,
            ".MuiSvgIcon-root": {
              color: theme.palette.common.white,
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255,.05)",
            },
          },
          ".MuiListItemButton-root": {
            color: theme.palette.drawer.text,
            borderRadius: 8,
            padding: "5px 14px",
            ".MuiTypography-root": {
              fontSize: 15,
            },
            ".MuiSvgIcon-root": {
              fontSize: 20,
              color: theme.palette.drawer.text,
            },
            "&:hover": {
              color: theme.palette.common.white,
              backgroundColor: "rgba(255,255,255,.05)",
              ".MuiSvgIcon-root": {
                color: theme.palette.common.white,
              },
            },
            ".MuiListItemIcon-root": {
              minWidth: "30px",
            },
          },
        },
        paper: {
          backgroundColor: theme.palette.drawer.bg,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          boxShadow: theme.shadows[0],
          color: theme.palette.common.black,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          boxShadow: theme.shadows[0],
          color: theme.palette.common.black,
        },
      },
    },
  };
};
