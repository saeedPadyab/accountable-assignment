import { createStitches } from "@stitches/react";
import {
  colors,
  darkColors,
  fonts,
  space,
  sizes,
  fontSizes,
  radii,
  zIndices,
  media,
  utils,
} from "./foundations";

export const { styled, css, globalCss, keyframes, theme, createTheme } =
  createStitches({
    theme: {
      colors,
      fonts,
      space,
      sizes,
      fontSizes,
      radii,
      zIndices,
    },
    media,
    utils,
  });

export const darkTheme = createTheme("dark-theme", {
  colors: darkColors,
});

export const globalStyles = globalCss({
  // "@font-face": {
  //   fontFamily: "CustomFont",
  //   src: 'local("CustomFont"), url("CustomFont.woff2")',
  // },
  /* Chrome, Safari, Edge, Opera */
  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },

  /* Firefox */
  "input[type=number]": {
    "-moz-appearance": "textfield",
  },
  body: {
    fontFamily: "Roboto, sans-serif",
    background: "$whitesmoke",
  },
  "*": {
    margin: 0,
    padding: 0,
    outline: "none",
    "&::before": {
      boxSizing: "border-box",
    },
    "&::after": {
      boxSizing: "border-box",
    },
  },
});
