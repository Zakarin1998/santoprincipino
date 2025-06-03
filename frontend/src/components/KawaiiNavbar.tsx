import React, { useState, useEffect, useCallback } from 'react';
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
  styled,
  Slide,
  useScrollTrigger
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

// Stile kawaii per la navbar
const KawaiiAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 20px rgba(230, 25, 110, 0.15)',
  borderBottom: '2px solid rgba(230, 25, 110, 0.2)',
  transition: 'all 0.3s ease',
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  borderRadius: '30px',
  padding: theme.spacing(0.5, 2),
  transition: 'all 0.3s ease',
  fontFamily: '"Quicksand", sans-serif',
  fontWeight: 600,
  color: '#121212',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '3px',
    backgroundColor: '#E6196E',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '80%',
  },
}));

// Funzione per l'effetto slide della navbar
function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface KawaiiNavbarProps {
  logoSrc?: string;
}

const KawaiiNavbar: React.FC<KawaiiNavbarProps> = ({
  logoSrc = 'https://i.ibb.co/LDBd4nRj/cielo-rosa.png'
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrolled, setScrolled] = useState(false);

  // Gestione dello scroll
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', path: '/', icon: '🏠' },
    { text: 'Gallery', path: '/gallery', icon: '🎨' },
    { text: 'Fairies', path: '/fairies', icon: '✨' },
    { text: 'Commissions', path: '/commissions', icon: '💌' },
    { text: 'About', path: '/about', icon: '👤' },
    { text: 'Contact', path: '/contact', icon: '📧' },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        height: '100%',
        backgroundColor: '#FFF0F5',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logoSrc}
            alt="Chiara's Logo"
            style={{ height: 40, marginRight: 10 }}
          />
          <Typography variant="h6" sx={{ color: '#E6196E' }}>
            Chiara's Art
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <motion.div
            key={item.text}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ListItem
              component={RouterLink}
              to={item.path}
              sx={{
                textAlign: 'center',
                justifyContent: 'center',
                my: 1,
                '&:hover': {
                  backgroundColor: 'rgba(230, 25, 110, 0.05)',
                }
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#121212',
                      fontFamily: '"Quicksand", sans-serif'
                    }}
                  >
                    {item.icon} {item.text}
                  </Typography>
                }
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <KawaiiAppBar
          position="fixed"
          sx={{
            height: scrolled ? 60 : 70,
            display: 'flex',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {/* Logo e Titolo */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={logoSrc}
                  alt="Chiara's Logo"
                  style={{
                    height: scrolled ? 40 : 50,
                    marginRight: 10,
                    transition: 'height 0.3s ease'
                  }}
                />
                <Typography
                  variant="h6"
                  component={RouterLink}
                  to="/"
                  sx={{
                    color: '#E6196E',
                    textDecoration: 'none',
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: scrolled ? '1.2rem' : '1.5rem',
                    transition: 'font-size 0.3s ease'
                  }}
                >
                  Chiara's Art
                </Typography>
              </Box>

              {/* Navigazione desktop */}
              {!isMobile ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {navItems.map((item) => (
                    <NavButton
                      key={item.text}
                      component={RouterLink}
                      to={item.path}
                      startIcon={<span>{item.icon}</span>}
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
                      borderRadius: '30px',
                      boxShadow: '0 4px 10px rgba(230, 25, 110, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 15px rgba(230, 25, 110, 0.4)'
                      }
                    }}
                  >
                    Order Commission
                  </Button>
                </Box>
              ) : (
                <IconButton
                  color="primary"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </KawaiiAppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: '80%',
            maxWidth: 300,
            backgroundColor: '#FFF0F5',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default KawaiiNavbar;