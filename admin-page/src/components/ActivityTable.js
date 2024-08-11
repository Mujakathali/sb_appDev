// src/components/ActivityTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Chip, Box, Typography, TableContainer } from '@mui/material';
import activities from './activities.json';  // Adjust the path according to your file structure

const getStatusChip = (status) => {
  switch (status) {
    case 'Booked':
      return <Chip label="Booked" sx={{ backgroundColor: '#d4edda', color: '#155724' }} />;
    case 'Canceled':
      return <Chip label="Canceled" sx={{ backgroundColor: '#f8d7da', color: '#721c24' }} />;
    default:
      return null;
  }
};

const ActivityTable = () => {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Box p={2}>
        <Typography variant="h6">Status</Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Booking Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Venue</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((activity, index) => (
            <TableRow key={index}>
              <TableCell>{activity.name}</TableCell>
              <TableCell>{getStatusChip(activity.status)}</TableCell>
              <TableCell>{activity.venue}</TableCell>
              <TableCell>{activity.date}</TableCell>
              <TableCell>{activity.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActivityTable;
