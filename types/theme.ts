import { PMDS_Light } from "styles/PMDS";

export interface FontFamily {
  sans: string;
  mono: string;
}

export interface FontSizes {
  title: string;
  large: string;
  regular: string;
  small: string;
}

export interface Radii {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface Transitions {
  fast: string;
  medium: string;
  slow: string;
}

export interface Color {
  main: string;
  main2: string;
  point: string;
  point2: string;
  background: string;
  background2: string;
  text: string;
  textGray: string;
  textGrayLight: string;
  textContrast: string;
  white: string;
  black: string;
  gray: {
    [index: string]: string;
  };
}

export interface ModeTheme {
  type: "dark" | "light";
  theme: {
    colors: Color;
    fonts: FontFamily;
    fontSizes: FontSizes;
  };
}

export interface PMDSTheme {
  colors: Color;
  fonts: FontFamily;
  fontSizes: FontSizes;
  radii: Radii;
  transitions: Transitions;
}

declare module "styled-components" {
  type ColorTheme = typeof PMDS_Light.colors;
  //   type ColorTheme = typeof PMDS_Light.colors & Color;
  export interface DefaultTheme {
    colors: ColorTheme;
    fontSizes: typeof PMDS_Light.fontSizes;
    fonts: {
      body: string;
      heading: string;
      mono: string;
    };
    radii: Radii;
    transitions: Transitions;
  }
}
