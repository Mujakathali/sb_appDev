// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Teal color
    },
    secondary: {
      main: '#f50057', // Pink color
    },
    background: {
      default: '#f7f7f7', // Light grey background
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

export default theme;
