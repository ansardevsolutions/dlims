import { createTheme } from '@mui/material/styles';

// DLIMS Brand Colors based on official website
const theme = createTheme({
  palette: {
    primary: {
      main: '#38a544', // DLIMS Green
      light: '#4caf50',
      dark: '#2e7d32',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f2921d', // Dastak Orange
      light: '#ffb74d',
      dark: '#e65100',
      contrastText: '#ffffff',
    },
    success: {
      main: '#1a4d2e', // Dark Green for headings
      light: '#2e7d32',
      dark: '#0d3d1f',
    },
    info: {
      main: '#1565c0', // Government blue accent
      light: '#42a5f5',
      dark: '#0d47a1',
    },
    background: {
      default: '#fcfbf5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: '0.03em',
    },
    caption: {
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    overline: {
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#38a544 #f5f5f5',
          '&::-webkit-scrollbar': {
            width: '12px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f5f5f5',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#38a544',
            borderRadius: '6px',
            '&:hover': {
              background: '#2e7d32',
            },
          },
        },
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#38a544 #f5f5f5',
          '&::-webkit-scrollbar': {
            width: '12px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f5f5f5',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#38a544',
            borderRadius: '6px',
            '&:hover': {
              background: '#2e7d32',
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '12px 32px',
          fontWeight: 700,
          fontSize: '0.95rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          },
          '&:focus': {
            outline: 'none',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
        contained: {
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
  },
});

export default theme;
