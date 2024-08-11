import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Birthday', 'Naming Ceremony', 'Executive Ceremony', 'Marriage'],
  datasets: [
    {
      data: [10, 20, 30, 40],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
    },
  ],
};

const SummaryChart = () => {
  return (
    <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Event Types
        </Typography>
        <Box sx={{ position: 'relative', height: '400px' }}>
          <Pie
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'right',
                  align: 'start',
                  labels: {
                    boxWidth: 12, // Width of the color box
                    padding: 15, // Spacing between legend items
                  },
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return `${context.label}: ${context.raw}`;
                    }
                  }
                }
              }
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default SummaryChart;
