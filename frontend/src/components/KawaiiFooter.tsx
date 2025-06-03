import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(8px)',
  borderTop: '3px solid #FFD1DC',
  padding: theme.spacing(4, 0),
  position: 'relative',
  marginTop: theme.spacing(8),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -15,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '30px',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'60\' height=\'60\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 60 0 L 0 0 0 60\' fill=\'none\' stroke=\'%23FFD1DC\' stroke-width=\'6\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23smallGrid)\'/%3E%3C/svg%3E")',
    backgroundSize: '60px 60px',
  }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  backgroundColor: '#FFF0F5',
  border: '2px solid #FFD1DC',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    backgroundColor: '#FFE6EE',
  }
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
  fontWeight: 'bold',
  color: '#FF6B98',
  marginBottom: theme.spacing(2),
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -5,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, #FF6B98, transparent)',
  }
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  display: 'block',
  transition: 'all 0.2s ease',
  position: 'relative',
  paddingLeft: theme.spacing(2),
  '&::before': {
    content: '"❀"',
    position: 'absolute',
    left: 0,
    color: '#FFB6C1',
    opacity: 0,
    transition: 'opacity 0.2s ease',
  },
  '&:hover': {
    color: '#FF6B98',
    transform: 'translateX(5px)',
    '&::before': {
      opacity: 1,
    }
  }
}));

const KawaiiFooter: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Box 
                component="img" 
                src="https://via.placeholder.com/120x60/FFD1DC/FF6B98?text=Chiara" 
                alt="Chiara's Logo" 
                sx={{ 
                  height: 60, 
                  mb: 2 
                }} 
              />
              <Typography variant="body2" color="text.secondary" paragraph>
                Creating kawaii and cute illustrations that bring joy and smiles to people around the world!
              </Typography>
              <Box sx={{ mt: 2 }}>
                <SocialIcon aria-label="Instagram" color="primary" href="https://instagram.com/chiaras_art" target="_blank">
                  <InstagramIcon />
                </SocialIcon>
                <SocialIcon aria-label="Twitter" color="primary" href="https://twitter.com/chiaras_art" target="_blank">
                  <TwitterIcon />
                </SocialIcon>
                <SocialIcon aria-label="Email" color="primary" href="mailto:chiara@kawaii-art.com">
                  <EmailIcon />
                </SocialIcon>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <FooterHeading variant="h6">Quick Links</FooterHeading>
              <FooterLink component={RouterLink} to="/">Home</FooterLink>
              <FooterLink component={RouterLink} to="/gallery">Art Gallery</FooterLink>
              <FooterLink component={RouterLink} to="/commissions">Commission Info</FooterLink>
              <FooterLink component={RouterLink} to="/about">About Me</FooterLink>
              <FooterLink component={RouterLink} to="/contact">Contact</FooterLink>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <FooterHeading variant="h6">Commission Status</FooterHeading>
              <Box 
                sx={{ 
                  p: 2, 
                  bgcolor: '#FFF0F5', 
                  borderRadius: '12px',
                  border: '2px dashed #FFD1DC',
                  mb: 2
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#36B37E' }}>
                  ✨ Commissions: OPEN ✨
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Current wait time: 1-2 weeks
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Interested in a commission? Feel free to contact me via email or Discord!
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            mt: 5, 
            pt: 3, 
            borderTop: '1px solid #FFD1DC',
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            &copy; {new Date().getFullYear()} Chiara's Art World. Made with 
            <FavoriteIcon sx={{ mx: 0.5, fontSize: '1rem', color: '#FF6B98' }} />
            and lots of sugar!
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default KawaiiFooter;