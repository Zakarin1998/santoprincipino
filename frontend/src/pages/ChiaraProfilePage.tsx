import React, { useEffect } from 'react';
import { Box, Container, Typography, Paper, Grid, Button, styled } from '@mui/material';
import KawaiiGallery from '../components/KawaiiGallery';
import '../assets/kawaii-global.css';

// Stile kawaii/cartoonesco personalizzato
const ProfileContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  position: 'relative',
  background: `linear-gradient(135deg, #FFE6EE 0%, #F0F8FF 100%)`,
  borderRadius: '20px',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  border: '8px solid #FFD1DC',
  boxShadow: '0 10px 30px rgba(255, 182, 193, 0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(#FFB6C1 1.5px, transparent 1.5px)',
    backgroundSize: '20px 20px',
    opacity: 0.05,
    pointerEvents: 'none',
    borderRadius: '12px',
  }
}));

const ProfileHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  '& h1': {
    fontFamily: '"Poppins", "Quicksand", sans-serif',
    color: '#E6196E',
    textShadow: '2px 2px 0 #FFC0CB, 4px 4px 0 rgba(0,0,0,0.1)',
    marginBottom: theme.spacing(1),
  },
  '& h5': {
    fontFamily: '"Poppins", "Quicksand", sans-serif',
    color: '#00B575',
  }
}));

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  border: '3px solid #FFD1DC',
  boxShadow: '0 8px 16px rgba(230, 25, 110, 0.1)',
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(230, 25, 110, 0.2)',
  }
}));

const SocialButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  margin: theme.spacing(1),
  padding: '8px 20px',
  fontFamily: '"Poppins", "Quicksand", sans-serif',
  fontWeight: 'bold',
  boxShadow: '0 4px 0 rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 0 rgba(0,0,0,0.1)',
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: '0 2px 0 rgba(0,0,0,0.1)',
  }
}));

const CommissionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  backgroundColor: '#FFF8FA',
  border: '3px solid #FFD1DC',
  boxShadow: '0 8px 16px rgba(230, 25, 110, 0.1)',
  marginTop: theme.spacing(4),
  position: 'relative',
}));

const ChiaraProfilePage: React.FC = () => {
  // Effetto confetti per quando si carica la pagina
  useEffect(() => {
    const createConfetti = () => {
      const confettiContainer = document.createElement('div');
      confettiContainer.className = 'confetti-container';
      document.body.appendChild(confettiContainer);
      
      const colors = ['#E6196E', '#FFB6C1', '#D1FFD1', '#D1DCFF', '#FFFFD1'];
      
      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          const confetti = document.createElement('div');
          confetti.className = 'confetti';
          confetti.style.left = Math.random() * 100 + '%';
          confetti.style.width = Math.random() * 10 + 5 + 'px';
          confetti.style.height = Math.random() * 10 + 5 + 'px';
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
          
          confettiContainer.appendChild(confetti);
          
          // Rimuovi il confetto dopo l'animazione
          setTimeout(() => {
            confetti.remove();
          }, 5000);
        }, i * 50);
      }
      
      // Rimuovi il contenitore dopo un po'
      setTimeout(() => {
        confettiContainer.remove();
      }, 10000);
    };
    
    createConfetti();
  }, []);

  // Sample artworks with fixed image URLs
  const artworks = [
      {
        "id": 1,
        "title": "Fairy Guardian of the Forest",
        "image": "https://i.ibb.co/b5VB1Vz/saint-principino-001.jpg",
        "description": "A magical fairy with emerald wings who protects the ancient forest.",
        "category": "fairies"
      },
      {
        "id": 2,
        "title": "Moonlight Fairy",
        "image": "https://i.ibb.co/FLRTqcH/saint-principino-002.jpg",
        "description": "A celestial fairy who draws her power from the moon's glow.",
        "category": "fairies"
      },
      {
        "id": 3,
        "title": "Twilight Fairy Princess",
        "image": "https://i.ibb.co/xtPTTSb/saint-principino-003.jpg",
        "description": "The princess of the twilight realm, where day meets night.",
        "category": "fairies"
      },
      {
        "id": 4,
        "title": "Crystal Fairy",
        "image": "https://i.ibb.co/HLKD9KK/saint-principino-004.jpg",
        "description": "A fairy born from the purest crystal, her wings shimmer with rainbow light.",
        "category": "fairies"
      },
  ];

  // Commission types
  const commissionTypes = [
    {
      type: "Character Design",
      price: "$40-60",
      description: "Full character design with color and simple background"
    },
    {
      type: "Illustrations",
      price: "$70-120",
      description: "Detailed illustration with background and multiple characters"
    },
    {
      type: "Emotes & Stickers",
      price: "$15-25 each",
      description: "Cute emotes and stickers for Discord, Twitch, etc."
    },
    {
      type: "Custom Art",
      price: "Contact me",
      description: "For special requests or commercial work"
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FFF0F5',
        backgroundImage: 'radial-gradient(#FFB6C1 1.5px, transparent 1.5px)',
        backgroundSize: '20px 20px',
        pt: 12, // Add padding top to account for the navbar
        pb: 8
      }}
    >
      <ProfileContainer maxWidth="lg" className="page-transition-enter">
        <ProfileHeader>
          <Typography variant="h1" className="kawaii-title kawaii-float">
            Chiara's Art World
          </Typography>
          <Typography variant="h5">
            Kawaii & Cute Illustrations ✨ Commission Open ✨
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SocialButton variant="contained" color="primary" className="kawaii-button">
              Instagram
            </SocialButton>
            <SocialButton variant="contained" color="secondary" className="kawaii-button">
              Twitter
            </SocialButton>
            <SocialButton 
              variant="contained" 
              sx={{ 
                backgroundColor: '#7289DA',
                '&:hover': {
                  backgroundColor: '#5b73c7'
                }
              }}
              className="kawaii-button"
            >
              Discord
            </SocialButton>
          </Box>
        </ProfileHeader>

        <Grid container spacing={4}>
          {/* About Me Section */}
          <Grid item xs={12} md={4}>
            <InfoCard className="kawaii-card">
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Box 
                  component="img"
                  src="https://i.ibb.co/PssMw2w/home-4.jpg"
                  alt="Chiara's Profile"
                  className="kawaii-float"
                  sx={{
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    border: '5px solid #FFD1DC',
                    mb: 2,
                    objectFit: 'cover'
                  }}
                />
                <Typography variant="h5" sx={{ color: '#E6196E', fontFamily: '"Poppins", "Quicksand", sans-serif', fontWeight: 'bold' }}>
                  Chiara
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  Artist • Illustrator • Dreamer
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph>
                Ciao! I'm Chiara, a digital artist specializing in cute, kawaii-style illustrations. 
                I love creating adorable characters and bringing smiles with my colorful artworks!
              </Typography>
              
              <Typography variant="body1" paragraph>
                My art style is influenced by Japanese kawaii culture, cartoon aesthetics, and my 
                love for all things cute and pastel-colored.
              </Typography>
              
              <Typography variant="body1">
                When I'm not drawing, I enjoy watching anime, collecting plushies, and drinking way 
                too much bubble tea! ✨🧋✨
              </Typography>
            </InfoCard>
          </Grid>
          
          {/* Gallery Preview */}
          <Grid item xs={12} md={8}>
            <InfoCard>
              <Typography variant="h5" sx={{ mb: 3, color: '#00B575', fontFamily: '"Poppins", "Quicksand", sans-serif', fontWeight: 'bold' }}>
                My Art Gallery ✨
              </Typography>
              
              <KawaiiGallery items={artworks} columns={2} spacing={2} />
              
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <SocialButton 
                  variant="contained" 
                  color="primary"
                  sx={{ px: 4 }}
                  className="kawaii-pulse"
                  href="/fairies"
                >
                  View Fairy Collection
                </SocialButton>
              </Box>
            </InfoCard>
          </Grid>
        </Grid>
        
        {/* Commissions Section */}
        <CommissionCard>
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', color: '#E6196E', fontFamily: '"Poppins", "Quicksand", sans-serif', fontWeight: 'bold' }}>
            Commission Information
          </Typography>
          
          <Grid container spacing={3}>
            {commissionTypes.map((commission, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box 
                  sx={{ 
                    p: 2, 
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '12px',
                    border: '2px dashed #FFD1DC',
                    height: '100%'
                  }}
                  className="kawaii-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Typography variant="h6" sx={{ color: '#E6196E', fontFamily: '"Poppins", "Quicksand", sans-serif' }}>
                    {commission.type}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#00B575', my: 1, fontWeight: 'bold' }}>
                    {commission.price}
                  </Typography>
                  <Typography variant="body2">
                    {commission.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 4, p: 3, backgroundColor: '#FFF0F5', borderRadius: '12px', border: '2px solid #FFD1DC' }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#E6196E', fontFamily: '"Poppins", "Quicksand", sans-serif' }}>
              Please Note:
            </Typography>
            <Typography variant="body1" component="div">
              <ul>
                <li>All commissions require a 50% deposit upfront</li>
                <li>Turnaround time is usually 1-2 weeks depending on complexity</li>
                <li>I reserve the right to decline any commission request</li>
                <li>I'll provide sketches for approval before finalizing</li>
                <li>Contact me via Discord for fastest response!</li>
              </ul>
            </Typography>
            
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <SocialButton 
                variant="contained" 
                color="secondary"
                sx={{ px: 4 }}
                className="kawaii-pulse"
                href="/contact"
              >
                Request Commission
              </SocialButton>
            </Box>
          </Box>
        </CommissionCard>
      </ProfileContainer>
    </Box>
  );
};

export default ChiaraProfilePage;