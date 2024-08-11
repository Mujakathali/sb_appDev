// src/components/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ActivityTable from './ActivityTable';
import SummaryChart from './SummaryChart';
import SalesChart from './SalesChart';

import Report from './Report';
import HallsTable from './HallsTable';
import { Grid, Paper, Typography } from '@mui/material';
import UsersPage from './userpage/User2';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#e0f2f1', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Bookings</Typography>
              <Typography variant="h4">12</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fce4ec', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Sales</Typography>
              <Typography variant="h4">₹39,335.00</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff3e0', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Check Ins</Typography>
              <Typography variant="h4">6</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#e3f2fd', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Occupancy Rate</Typography>
              <Typography variant="h4">48%</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <ActivityTable />
          </Grid>
          <Grid item xs={12} md={6}>
            <SummaryChart />
          </Grid>
          <Grid item xs={12}>
            <SalesChart />
          </Grid>
        </Grid>
      } />
      
      <Route path="/users" element={<UsersPage />} />
      <Route path="/report" element={<Report />} />
      <Route path="/halls" element={<HallsTable />} />
    </Routes>
  );
};

export default MainRoutes;
