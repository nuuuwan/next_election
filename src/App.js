import React, { Component } from "react";

import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppColors from "./view/_constants/AppColors";
import HomePage from "./view/pages/HomePage.js";
import Alert from '@mui/material/Alert';

const MIN_SCREEN_WIDTH = 1400;

const THEME = createTheme({
  palette: {
    primary: {
      main: AppColors.Primary,
    },
    secondary: {
      main: AppColors.Secondary,
    },
    success: {
      main: AppColors.Success,
    },
  },
  typography: {
    fontFamily: [
      "Duru Sans",
      "Dosis",
      "Darker Grotesque",
      "Futura",
      "sans-serif",
    ].join(","),
  },
});

const STYLE = {
  margin: 4,
};

export default class App extends Component {
  render() {
    if (window.screen.width < MIN_SCREEN_WIDTH) {
      return (
        <Alert severity="error">
          This App is designed for Desktop Usage.
          Please use a device with a screen width of
          at least {MIN_SCREEN_WIDTH} pixels.
        </Alert>
      )
    }
    return (
      <ThemeProvider theme={THEME}>
        <Box sx={STYLE}>
          <HomePage />
        </Box>
      </ThemeProvider>
    );
  }
}
