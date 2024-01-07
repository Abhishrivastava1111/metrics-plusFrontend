import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import StorageIcon from '@mui/icons-material/Storage';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';

// Import your components here
import ProjectComponent from './Project';
import WorklogComponent from './Worklog';
import TaskComponent from './Task';

const drawerWidth = 300;

const drawerItems = [
  { text: 'Projects', icon: <StorageIcon />, component: <ProjectComponent /> },
  { text: 'Worklog', icon: <WorkIcon />, component: <WorklogComponent /> },
  { text: 'Tasks', icon: <AssignmentIcon />, component: <TaskComponent /> },
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(drawerItems[0]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (item) => {
    setSelectedItem(item);
    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ ml: 2, mt: 1, color: 'white', textAlign: 'center' }}
        >
          METRICS +
        </Typography>
      </Toolbar>
      <Divider />
        {/* Profile Section */}
        <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon>
              <Avatar
                alt="Your Name"
                src="path_to_your_avatar_image.jpg"
                sx={{ width: 128, height: 128 }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Your Name"
              secondary="Your Designation"
              sx={{ textAlign: 'center' }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {drawerItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            selected={selectedItem === item}
            onClick={() => handleListItemClick(item)}
          >
            <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `-${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {selectedItem.text}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {selectedItem.component}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
