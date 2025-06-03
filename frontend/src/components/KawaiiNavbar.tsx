import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  styled
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

// Stile kawaii per la navbar
const KawaiiAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)', // Increased opacity for better contrast
  backdropFilter: 'blur(8px)',
  boxShadow: '0 4px 20px rgba(230, 25, 110, 0.25)', // Adjusted to match theme
  borderBottom: '3px solid #E6196E', // Darker for better visibility
  transition: 'all 0.3s ease',
}));

const KawaiiToolbar = styled(Toolbar)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    height: 40,
    marginRight: theme.spacing(1),
  },
  '& h6': {
    fontFamily: '"Poppins", "Quicksand", sans-serif', // Updated font family
    fontWeight: 'bold',
    // Changed gradient for better readability
    background: 'linear-gradient(45deg, #E6196E 30%, #00B575 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.5rem',
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  borderRadius: '20px',
  padding: theme.spacing(0.5, 2),
  transition: 'all 0.3s ease',
  fontFamily: '"Quicksand", sans-serif',
  fontWeight: 600,
  color: '#121212', // Darker text color for better contrast
  '&:hover': {
    transform: 'translateY(-2px)',
    backgroundColor: 'rgba(230, 25, 110, 0.1)', // Adjusted to match theme
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '3px',
    backgroundColor: '#E6196E', // Adjusted to match theme
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '80%',
  },
  '&:focus': {
    outline: '3px solid #E6196E',
    outlineOffset: '2px',
  }
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '70%',
    maxWidth: 300,
    backgroundColor: '#FFF0F5',
    backgroundImage: 'radial-gradient(#FFB6C1 2px, transparent 2px)',
    backgroundSize: '40px 40px',
    padding: theme.spacing(2),
    borderRight: '3px solid #E6196E', // Adjusted to match theme
  }
}));

interface KawaiiNavbarProps {
  logoSrc?: string;
}

const KawaiiNavbar: React.FC<KawaiiNavbarProps> = ({ logoSrc = 'https://via.placeholder.com/40x40/FFD1DC/FFFFFF?text=C' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Fairies', path: '/fairies' },
    { text: 'Commissions', path: '/commissions' },
    { text: 'About Me', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
        <LogoContainer>
          <img src={logoSrc} alt="Chiara's Logo" />
          <Typography variant="h6">Chiara's Art</Typography>
        </LogoContainer>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            sx={{
              textAlign: 'center',
              mb: 1,
              borderRadius: '16px',
              '&:hover': {
                backgroundColor: 'rgba(230, 25, 110, 0.1)', // Adjusted to match theme
              }
            }}
          >
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                fontFamily: '"Poppins", "Quicksand", sans-serif', // Updated font family
                fontWeight: 'bold',
                color: '#121212' // Darker for better contrast
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <KawaiiAppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0}
        sx={{
          height: scrolled ? 70 : 80,
          transition: 'height 0.3s ease',
        }}
        aria-label="Main Navigation" // Added for accessibility
      >
        <Container maxWidth="lg">
          <KawaiiToolbar disableGutters>
            <LogoContainer sx={{ flexGrow: { xs: 1, md: 0 } }}>
              <img src={logoSrc} alt="Chiara's Logo" />
              <Typography variant="h6" component={RouterLink} to="/" style={{ textDecoration: 'none' }}>
                Chiara's Art
              </Typography>
            </LogoContainer>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open navigation menu"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto', color: '#E6196E' }} // Adjusted to match theme
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', ml: 'auto' }} component="nav">
                {navItems.map((item) => (
                  <NavButton
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                    aria-label={`Navigate to ${item.text}`} // Added for accessibility
                  >
                    {item.text}
                  </NavButton>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/commissions"
                  aria-label="Order Commission" // Added for accessibility
                  sx={{
                    ml: 2,
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 0 rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 0 rgba(0,0,0,0.1)',
                    },
                    '&:focus': {
                      outline: '3px solid #B01355',
                      outlineOffset: '2px',
                    }
                  }}
                >
                  Order Commission
                </Button>
              </Box>
            )}
          </KawaiiToolbar>
        </Container>
      </KawaiiAppBar>

      <MobileDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        aria-label="Mobile Navigation Menu" // Added for accessibility
      >
        {drawer}
      </MobileDrawer>

      {/* Spacer to compensate for fixed AppBar */}
      <Toolbar sx={{ mb: 2 }} />
    </>
  );
};

export default KawaiiNavbar;