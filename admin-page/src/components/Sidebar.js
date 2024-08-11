import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { Home, People, Description, MeetingRoom, ExitToApp } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import Assessment from '@mui/icons-material/Assessment';

const drawerWidth = 200;

const Sidebar = () => {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutConfirm = () => {
    setLogoutDialogOpen(false);
    // Perform logout logic here
    // For example, remove tokens, clear session, etc.
    navigate('/login'); // Redirect to login page after logout
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#fdfdfd',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Space between elements to push logout button to the bottom
          },
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
            <Typography variant="h6">Hall Booking</Typography>
          </Box>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon><Assessment /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/halls">
              <ListItemIcon><MeetingRoom /></ListItemIcon>
              <ListItemText primary="Halls" />
            </ListItem>
            <ListItem button component={Link} to="/users">
              <ListItemIcon><People /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button component={Link} to="/report">
              <ListItemIcon><Description /></ListItemIcon>
              <ListItemText primary="Report" />
            </ListItem>
          </List>
        </Box>
        
        <List>
          <ListItem button onClick={handleLogoutClick}>
            <ListItemIcon><ExitToApp /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      <Dialog
        open={logoutDialogOpen}
        onClose={handleLogoutCancel}
      >
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogoutConfirm} color="primary" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Sidebar;
