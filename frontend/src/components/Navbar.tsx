import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Avatar,
  Tooltip,
  Fade
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IMAGES } from '../assets/imageConstants';
import type { TokenData } from '../types';

interface NavbarProps {
  tokenData: TokenData | null;
}

const Navbar: React.FC<NavbarProps> = ({ tokenData }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Avatar 
              src={IMAGES.LOGO_JCD} 
              alt="JCD Logo"
              sx={{ 
                width: { xs: 40, md: 48 }, 
                height: { xs: 40, md: 48 },
                mr: 1.5,
                border: 2,
                borderColor: 'primary.main'
              }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  lineHeight: 1.2
                }}
              >
                {tokenData ? tokenData.name : 'Jacky Chan Dollar'}
              </Typography>
              <Typography 
                variant="caption" 
                color="primary.main"
                sx={{ 
                  fontWeight: 'medium',
                  fontSize: { xs: '0.7rem', md: '0.8rem' },
                  letterSpacing: 0.5
                }}
              >
                {tokenData ? tokenData.tagline : '2018 Relic'}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title="Learn about the token's economics" arrow TransitionComponent={Fade} placement="bottom">
                <Button 
                  href="#tokenomics"
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 77, 141, 0.08)',
                      color: 'primary.main',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '3px',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                      borderRadius: '2px',
                    },
                    '&:hover::after': {
                      width: '80%',
                    }
                  }}
                >
                  Tokenomics
                </Button>
              </Tooltip>
              <Tooltip title="Discover historical tokens" arrow TransitionComponent={Fade} placement="bottom">
                <Button 
                  href="#relics"
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 77, 141, 0.08)',
                      color: 'primary.main',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '3px',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                      borderRadius: '2px',
                    },
                    '&:hover::after': {
                      width: '80%',
                    }
                  }}
                >
                  Relics
                </Button>
              </Tooltip>
              <Tooltip title="Learn about Uniswap's history" arrow TransitionComponent={Fade} placement="bottom">
                <Button 
                  href="#uniswap"
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 77, 141, 0.08)',
                      color: 'primary.main',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '3px',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                      borderRadius: '2px',
                    },
                    '&:hover::after': {
                      width: '80%',
                    }
                  }}
                >
                  Uniswap Origins
                </Button>
              </Tooltip>
              <Tooltip title="Explore the unicorn evolution" arrow TransitionComponent={Fade} placement="bottom">
                <Button 
                  href="#unicorn"
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 77, 141, 0.08)',
                      color: 'primary.main',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '3px',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                      borderRadius: '2px',
                    },
                    '&:hover::after': {
                      width: '80%',
                    }
                  }}
                >
                  Unicorn Evolution
                </Button>
              </Tooltip>
              {tokenData && (
                <Button 
                  variant="contained" 
                  color="primary"
                  href={tokenData.chart}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ ml: 2 }}
                  startIcon={
                    <Box 
                      component="img"
                      src={IMAGES.ICON_DEX}
                      alt="Chart"
                      sx={{ width: 20, height: 20 }}
                    />
                  }
                >
                  View Chart
                </Button>
              )}
            </Box>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '50%'
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  elevation: 2,
                  sx: {
                    mt: 1.5,
                    borderRadius: 2,
                    minWidth: 180
                  }
                }}
              >
                <MenuItem 
                  onClick={handleClose} 
                  component="a" 
                  href="#tokenomics"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(255, 77, 141, 0.08)',
                    }
                  }}
                >
                  Tokenomics
                </MenuItem>
                <MenuItem 
                  onClick={handleClose} 
                  component="a" 
                  href="#relics"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(255, 77, 141, 0.08)',
                    }
                  }}
                >
                  Relics
                </MenuItem>
                <MenuItem 
                  onClick={handleClose} 
                  component="a" 
                  href="#uniswap"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(255, 77, 141, 0.08)',
                    }
                  }}
                >
                  Uniswap Origins
                </MenuItem>
                <MenuItem 
                  onClick={handleClose} 
                  component="a" 
                  href="#unicorn"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(255, 77, 141, 0.08)',
                    }
                  }}
                >
                  Unicorn Evolution
                </MenuItem>
                {tokenData && (
                  <MenuItem 
                    onClick={handleClose} 
                    component="a" 
                    href={tokenData.chart}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 600,
                      backgroundColor: 'rgba(255, 77, 141, 0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 77, 141, 0.1)',
                      }
                    }}
                  >
                    View Chart
                  </MenuItem>
                )}
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;