import React, { useState } from 'react';
import { CssBaseline, Box, Grid, Paper, Typography, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ActivityTable from './components/ActivityTable';
import SummaryChart from './components/SummaryChart';
import SalesChart from './components/SalesChart';
import Footer from './components/Footer';
import User2 from './components/userpage/User2';
import Report from './components/Report';
import HallsTable from './components/HallsTable';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute'; // Ensure this is created as described previously

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f7f7f7',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          borderRadius: '8px',
        },
      },
    },
  },
});

const drawerWidth = 10;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {isAuthenticated && <Sidebar />}
            <Box component="main" sx={{ flexGrow: 1, p: 3, ml: isAuthenticated ? `${drawerWidth}px` : 0 }}>
              <Routes>
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} element={() => (
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                      <Paper>
                        <Typography variant="h6">Bookings</Typography>
                        <Typography variant="h4">12</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Paper>
                        <Typography variant="h6">Sales</Typography>
                        <Typography variant="h4">₹39,335.00</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Paper>
                        <Typography variant="h6">Check Ins</Typography>
                        <Typography variant="h4">6</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Paper>
                        <Typography variant="h6">Occupancy Rate</Typography>
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
                )} />} />
                <Route path="/users" element={<PrivateRoute isAuthenticated={isAuthenticated} element={User2} />} />
                <Route path="/report" element={<PrivateRoute isAuthenticated={isAuthenticated} element={Report} />} />
                <Route path="/halls" element={<PrivateRoute isAuthenticated={isAuthenticated} element={HallsTable} />} />
                <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
              </Routes>
            </Box>
          </Box>
          {isAuthenticated && <Footer />}
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
