import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

function DrawerComponent({
  handleDrawerToggle,
  drawerItems,
  selectedItem,
  profileData,
}) {
  const navigate = useNavigate();

  const handleListItemClick = () => {
    navigate("/projects");
  };

  return (
    <Drawer variant="temporary" onClose={handleDrawerToggle}>
      <Toolbar sx={{ backgroundColor: "#0F1133", minHeight: "64px" }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            color: "white",
            textAlign: "left",
            pl: 2,
            pt: 1,
            pb: 1,
            fontFamily: "monospace",
            display: "flex",
            flexDirection: "column",
            height: "100%", // <-- Added this line
          }}
        >
          <Typography variant="p"> METRICS plus +</Typography>
          <Divider />
          <List sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ flexDirection: "column", alignItems: "center" }}
              >
                <ListItemIcon>
                  <Avatar
                    alt={profileData.name}
                    src={profileData.avatar}
                    sx={{ width: 128, height: 128 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={profileData.name}
                  sx={{ textAlign: "center" }}
                />
                <ListItemText
                  primary={profileData.designation}
                  sx={{ textAlign: "center" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List sx={{ flexGrow: 1 }}>
            {drawerItems.map((item) => (
              <ListItem
                key={item.text}
                onClick={() => handleListItemClick(item)}
              >
                {!item.text == "" ? (
                  <ListItemButton
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {item?.icon ? (
                      <ListItemIcon>{item?.icon}</ListItemIcon>
                    ) : (
                      ""
                    )}
                    {item?.icon ? <ListItemText primary={item?.text} /> : ""}
                  </ListItemButton>
                ) : (
                  ""
                )}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Typography>
      </Toolbar>
    </Drawer>
  );
}

export default DrawerComponent;
