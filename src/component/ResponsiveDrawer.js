import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarComponent from "./AppBarComponent";
import DrawerComponent from "./DrawerComponent";
import MainComponent from "./MainComponent";

import ProjectComponent from "./Project"; // Import ProjectComponent
import WorklogComponent from "./Worklog"; // Import WorklogComponent
import TaskComponent from "./Task"; // Import TaskComponent
import Box from "@mui/material/Box";
import StorageIcon from "@mui/icons-material/Storage";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
// Import your components here
const drawerWidth = 300;

const drawerItems = [
  {
    text: "Projects",
    icon: <StorageIcon sx={{ color: "white" }} />,
    component: <ProjectComponent />,
  },
  {
    text: "Worklog",
    icon: <WorkIcon sx={{ color: "white" }} />,
    component: <WorklogComponent />,
  },
  {
    text: "Tasks",
    icon: <AssignmentIcon sx={{ color: "white" }} />,
    component: <TaskComponent />,
  },
  {
    text: "Report",
    icon: <StorageIcon sx={{ color: "white" }} />,
    component: <ProjectComponent />,
  },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
  { text: "" },
];

const profileData = {
  name: "Sulabh Gangwar",
  designation: "Associate Software Engineer",
  avatar: "./images/avatar-business-man-graphic-vector-9646150.jpg",
};

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(drawerItems[0]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (item) => {
    setSelectedItem(item);
    setMobileOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        selectedItem={selectedItem}
      />
      <DrawerComponent
        handleDrawerToggle={handleDrawerToggle}
        drawerItems={drawerItems}
        selectedItem={selectedItem}
        profileData={profileData}
      />
      <MainComponent selectedItem={selectedItem}>
        {selectedItem.component}
      </MainComponent>
    </Box>
  );
}

export default ResponsiveDrawer;
