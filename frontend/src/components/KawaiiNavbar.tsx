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
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 4px 20px rgba(255, 182, 193, 0.25)',
  borderBottom: '3px solid #FFD1DC',
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
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #FF6B98 30%, #36B37E 90%)',
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
  fontFamily: '"Quicksand", "Comic Sans MS", sans-serif',
  fontWeight: 600,
  '&:hover': {
    transform: 'translateY(-2px)',
    backgroundColor: 'rgba(255, 182, 193, 0.1)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '3px',
    backgroundColor: '#FF6B98',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '80%',
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
    borderRight: '3px solid #FFD1DC',
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
                backgroundColor: 'rgba(255, 107, 152, 0.1)',
              }
            }}
          >
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
                fontWeight: 'bold',
                color: '#FF6B98'
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
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto', color: '#FF6B98' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', ml: 'auto' }}>
                {navItems.map((item) => (
                  <NavButton
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                  >
                    {item.text}
                  </NavButton>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/commissions"
                  sx={{
                    ml: 2,
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 0 rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 0 rgba(0,0,0,0.1)',
                    },
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
      >
        {drawer}
      </MobileDrawer>

      {/* Spacer to compensate for fixed AppBar */}
      <Toolbar sx={{ mb: 2 }} />
    </>
  );
};

export default KawaiiNavbar;