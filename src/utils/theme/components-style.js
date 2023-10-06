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
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiFormHelperText-root": {
            marginLeft: "0px",
          },
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
