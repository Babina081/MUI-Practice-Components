import { SimplePaletteColorOptions } from "./../node_modules/@mui/material/styles/createPalette.d";
import { PaletteColorOptions, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral?: PaletteColor;
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface PaletteColor {
    darker?: string;
  }
}
