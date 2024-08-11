// src/components/Layout.js
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const drawerWidth = 10;

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
