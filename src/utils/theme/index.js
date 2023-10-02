import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";
import { componentsStyle } from "./componentsStyle";

export const theme = createTheme({
  palette,
  typography,
  components: componentsStyle(),
});
