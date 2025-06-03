import { createTheme } from '@mui/material/styles';

// Tema kawaii moderno con contrasti più nitidi e stile contemporaneo
const kawaiiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E6196E', // Rosa più scuro per migliorare il contrasto
      light: '#FF7DAE',
      dark: '#B01355', // Ancora più scuro per accessibilità
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00B575', // Verde menta più scuro per contrasto
      light: '#5AEDBA',
      dark: '#008F5C',
      contrastText: '#ffffff',
    },
    error: {
      main: '#D92E2E', // Rosso più scuro per contrasto migliore
      light: '#FF7D7D',
      dark: '#B01515',
    },
    warning: {
      main: '#E6B400', // Giallo più scuro per migliore contrasto
      light: '#FFD96B',
      dark: '#B38A00',
    },
    info: {
      main: '#0A7AD1', // Blu più scuro per contrasto
      light: '#7DC2FF',
      dark: '#005CA9',
    },
    success: {
      main: '#00B060', // Verde più scuro per migliorare contrasto
      light: '#7DFFAE',
      dark: '#008F4D',
    },
    background: {
      default: '#FFF0F5', // Manteniamo il Lavender blush come base
      paper: '#FFFFFF',
    },
    text: {
      primary: '#121212', // Testo principale molto più scuro per massima leggibilità
      secondary: '#444444', // Testo secondario più scuro
    },
    divider: 'rgba(225, 50, 110, 0.25)', // Divisori più visibili
  },
  typography: {
    fontFamily: '"Quicksand", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Quicksand", sans-serif', // Font più moderno
      fontWeight: 800,
      fontSize: '3.2rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Poppins", "Quicksand", sans-serif',
      fontWeight: 700,
      fontSize: '2.6rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Poppins", "Quicksand", sans-serif',
      fontWeight: 700,
      fontSize: '2.1rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Poppins", "Quicksand", sans-serif',
      fontWeight: 600,
      fontSize: '1.6rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Poppins", "Quicksand", sans-serif',
      fontWeight: 600,
      fontSize: '1.3rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Poppins", "Quicksand", sans-serif',
      fontWeight: 600,
      fontSize: '1.1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      fontFamily: '"Quicksand", "Poppins", sans-serif',
      letterSpacing: '0.03em',
    },
    body1: {
      fontFamily: '"Quicksand", "Roboto", "Helvetica", sans-serif',
      fontSize: '1.05rem',
      lineHeight: 1.6,
      fontWeight: 500, // Leggermente più spesso per leggibilità
    },
    body2: {
      fontFamily: '"Quicksand", "Roboto", "Helvetica", sans-serif',
      fontSize: '0.9rem',
      lineHeight: 1.6,
      fontWeight: 500, // Leggermente più spesso per leggibilità
    },
  },
  shape: {
    borderRadius: 18, // Bordi leggermente più arrotondati
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #FFF0F5;
          background-image: 
            radial-gradient(#FF7DAE 1.5px, transparent 1.5px),
            radial-gradient(#4DABFF 1.5px, transparent 1.5px);
          background-size: 40px 40px;
          background-position: 0 0, 20px 20px;
          cursor: url('https://cur.cursors-4u.net/nature/nat-10/nat908.cur'), auto;
        }
        
        /* Scrollbar moderno */
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: #FFE6F0;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #E6196E 0%, #FF7DAE 100%);
          border-radius: 10px;
          border: 3px solid #FFE6F0;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #B01355 0%, #E6196E 100%);
        }
        
        /* Animazioni di base */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* Aggiunti stili focus visibili per accessibilità */
        *:focus {
          outline: 3px solid #E6196E !important;
          outline-offset: 2px !important;
        }
        
        /* Classi di contrasto per testo */
        .text-on-light {
          color: #121212 !important;
        }
        
        .text-on-dark {
          color: #FFFFFF !important;
        }
        
        .text-on-primary {
          color: #FFFFFF !important;
        }
        
        .text-on-secondary {
          color: #FFFFFF !important;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          boxShadow: '0 6px 0 rgba(0,0,0,0.15)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          fontWeight: 700,
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 9px 0 rgba(0,0,0,0.15)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 3px 0 rgba(0,0,0,0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #E6196E 0%, #FF7DAE 100%)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #FF7DAE 0%, #E6196E 100%)',
            opacity: 0,
            transition: 'opacity 0.3s',
            borderRadius: 'inherit',
          },
          '&:hover::after': {
            opacity: 1,
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #00B575 0%, #5AEDBA 100%)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #5AEDBA 0%, #00B575 100%)',
            opacity: 0,
            transition: 'opacity 0.3s',
            borderRadius: 'inherit',
          },
          '&:hover::after': {
            opacity: 1,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0 10px 30px rgba(230,25,110,0.15), 0 5px 15px rgba(0,0,0,0.07)',
          overflow: 'hidden',
          transition: 'transform 0.3s, box-shadow 0.3s',
          position: 'relative',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 40px rgba(230,25,110,0.2), 0 10px 20px rgba(0,0,0,0.1)',
          },
          border: '3px solid rgba(230,25,110,0.4)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(230,25,110,0.05) 0%, rgba(0,181,117,0.05) 100%)',
            opacity: 0,
            transition: 'opacity 0.3s',
            zIndex: 0,
          },
          '&:hover::before': {
            opacity: 1,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0 8px 20px rgba(0,0,0,0.07)',
        },
        elevation1: {
          boxShadow: '0 2px 10px rgba(230,25,110,0.1), 0 1px 5px rgba(0,0,0,0.05)',
        },
        elevation2: {
          boxShadow: '0 4px 15px rgba(230,25,110,0.12), 0 2px 7px rgba(0,0,0,0.07)',
        },
        elevation3: {
          boxShadow: '0 6px 20px rgba(230,25,110,0.14), 0 3px 10px rgba(0,0,0,0.08)',
        },
        elevation4: {
          boxShadow: '0 8px 25px rgba(230,25,110,0.16), 0 4px 12px rgba(0,0,0,0.09)',
        },
        elevation5: {
          boxShadow: '0 10px 30px rgba(230,25,110,0.18), 0 5px 15px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 15px rgba(230,25,110,0.15)',
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.95)', // Increased opacity for better contrast
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 600,
          '&.MuiChip-colorPrimary': {
            background: 'linear-gradient(135deg, #E6196E 0%, #FF7DAE 100%)',
          },
          '&.MuiChip-colorSecondary': {
            background: 'linear-gradient(135deg, #00B575 0%, #5AEDBA 100%)',
          },
          boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
          '&:hover': {
            boxShadow: '0 3px 7px rgba(0,0,0,0.12)',
          },
        },
        label: {
          fontWeight: 600, // Improved readability
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(176,19,85,0.95)', // Darker for better contrast
          color: '#fff',
          fontSize: '0.85rem',
          fontWeight: 500, // Better readability
          borderRadius: 10,
          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
          padding: '8px 12px',
        },
        arrow: {
          color: 'rgba(176,19,85,0.95)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          position: 'relative',
          color: '#E6196E', // Darker for better contrast
          fontWeight: 600, // Bold for better visibility
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            bottom: 0,
            left: 0,
            backgroundColor: '#E6196E',
            transform: 'scaleX(0)',
            transformOrigin: 'bottom right',
            transition: 'transform 0.3s ease-out',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '2px solid rgba(230,25,110,0.3)',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 58,
          height: 32,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 1,
            '&.Mui-checked': {
              transform: 'translateX(26px)',
              '& + .MuiSwitch-track': {
                backgroundColor: '#E6196E',
                opacity: 1,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            width: 28,
            height: 28,
            boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
          },
          '& .MuiSwitch-track': {
            borderRadius: 32 / 2,
            opacity: 1,
            backgroundColor: 'rgba(0,0,0,0.35)', // Darker for better contrast
          },
        },
      },
    },
    // Added for form controls with better contrast
    MuiInputBase: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: '#121212', // Darker text for input
          },
          '&.Mui-focused': {
            borderColor: '#E6196E',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#444444', // Darker label color
          '&.Mui-focused': {
            color: '#E6196E',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.25)', // Darker border
            },
            '&:hover fieldset': {
              borderColor: 'rgba(230, 25, 110, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#E6196E',
            },
          },
        },
      },
    },
  },
});

export default kawaiiTheme;