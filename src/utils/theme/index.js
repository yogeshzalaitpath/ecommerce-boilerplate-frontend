import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";
import { componentsStyle } from "./components-style";

export const theme = createTheme({
  palette,
  typography,
  components: componentsStyle(),
});
