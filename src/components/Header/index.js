import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Application</Typography>
      </Toolbar>
    </AppBar>
  );
}
