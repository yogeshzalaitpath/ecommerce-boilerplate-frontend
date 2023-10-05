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
