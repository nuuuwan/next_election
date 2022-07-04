import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";

import HelpMenu from "./HelpMenu.js";

const STYLE = {
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 1,
};

export default function CustomAppBar({ title, Icon }) {
  return (
    <Box sx={STYLE}>
      <AppBar elevation={10}>
        <Toolbar>
          <Typography variant="h6" component="div">
            {t("Next Election")}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {" "}
          </Typography>
          <HelpMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
