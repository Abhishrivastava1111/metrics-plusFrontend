import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

function MainComponent({ selectedItem, children }) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  );
}

export default MainComponent;
