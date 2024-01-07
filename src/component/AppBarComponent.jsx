import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

function AppBarComponent({ handleDrawerToggle, selectedItem }) {
  return (
    <AppBar position="fixed" sx={{ ml: { sm: `-${100}px` } }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {selectedItem.text}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
