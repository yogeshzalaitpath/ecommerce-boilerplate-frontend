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
    MuiDrawer: {
      styleOverrides: {
        root: {
          ".Mui-selected": {
            backgroundColor: "rgba(255,255,255,.05)",
            color: theme.palette.common.white,
          },
          ".MuiListItemButton-root": {
            color:theme.palette.common.white,
            borderRadius: 6,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,.05)",
              color: theme.palette.common.white,
            },

            span: {
              fontSize: 15,
            },
            ".MuiListItemIcon-root": {
              minWidth: "35px",
              color:theme.palette.common.white,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,.05)",
                color: theme.palette.common.white,
              },
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
  };
};
