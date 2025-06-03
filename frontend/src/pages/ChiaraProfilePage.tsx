import React, { useEffect } from 'react';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  styled 
} from '@mui/material';
import { motion } from 'framer-motion';
import { useImagePreloader } from '../hooks/useImagePreloader';
import PageTransition from '../components/PageTransition';
import KawaiiGallery from '../components/KawaiiGallery';
import LazyImage from '../components/LazyImage';

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

// Array di immagini da precaricare
const IMAGE_PRELOAD_LIST = [
    'https://i.ibb.co/PssMw2w/home-4.jpg',
    'https://i.ibb.co/FbbRnFc0/saint-principino-001.jpg',
    'https://i.ibb.co/3yj3Fpk4/saint-principino-002.jpg',
    'https://i.ibb.co/h1KHZ1YX/saint-principino-003.jpg',
    'https://i.ibb.co/RGxyYDVV/saint-principino-004.jpg'
];

const ChiaraProfilePage: React.FC = () => {
  // Precarica le immagini
  const { imagesPreloaded } = useImagePreloader(IMAGE_PRELOAD_LIST);

  // Effetto confetti ottimizzato
  useEffect(() => {
    const createConfetti = () => {
      const confettiContainer = document.createElement('div');
      confettiContainer.className = 'confetti-container';
      document.body.appendChild(confettiContainer);

      const colors = ['#E6196E', '#FFB6C1', '#D1FFD1', '#D1DCFF', '#FFFFD1'];

      const createConfettiPiece = () => {
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


      };
      
      // Crea confetti più velocemente e in modo più efficiente
      const confettiInterval = setInterval(createConfettiPiece, 50);

      // Ferma la creazione dopo un po'
      setTimeout(() => {
        clearInterval(confettiInterval);
        setTimeout(() => {
          confettiContainer.remove();
        }, 5000);
      }, 1000);
    };

    if (imagesPreloaded) {
      createConfetti();
    }
  }, [imagesPreloaded]);

  // Artwork samples con URL corretti e più affidabili
  const artworks = [
    {
      "id": 1,
      "title": "Fairy Guardian of the Forest",
      "image": "https://i.ibb.co/RGxyYDVV/saint-principino-001.jpg",
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
      "title": "Crystal Fairy",
      "image": "https://i.ibb.co/xtPTTSb/saint-principino-003.jpg",
      "description": "A fairy born from the purest crystal, her wings shimmer with rainbow light.",
      "category": "fairies"
    },
    {
      "id": 4,
      "title": "Spring Blossom Fairy",
      "image": "https://i.ibb.co/HLKD9KK/saint-principino-004.jpg",
      "description": "The harbinger of spring who brings flowers to bloom with her touch.",
      "category": "fairies"
    },
  ];

  // Tipi di commissioni
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
    <PageTransition>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#FFF0F5',
          backgroundImage: 'radial-gradient(#FFB6C1 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          py: 8
        }}
      >
        <ProfileContainer maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box textAlign="center" mb={4}>
              <Typography variant="h1" sx={{color: '#E6196E', fontFamily: '"Poppins", "Quicksand", sans-serif', mb: 2}}
              >
                Chiara's Art World
              </Typography>

              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#00B575', 
                  fontFamily: '"Poppins", "Quicksand", sans-serif' 
                }}
              >
                Kawaii & Cute Illustrations ✨ Commission Open ✨
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <SocialButton variant="contained" color="primary">
                  Instagram
                </SocialButton>
                <SocialButton variant="contained" color="secondary">
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
                >
                  Discord
                </SocialButton>
              </Box>
            </Box>

            <Grid container spacing={4}>
              {/* About Me Section */}
              <Grid item xs={12} md={4}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    borderRadius: '20px', 
                    backgroundColor: 'rgba(255,255,255,0.9)' 
                  }}
                >
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <LazyImage
                      src="https://i.ibb.co/PssMw2w/home-4.jpg"
                      alt="Chiara's Profile"
                      style={{
                        width: 180,
                        height: 180,
                        borderRadius: '50%',
                        border: '5px solid #FFD1DC',
                        marginBottom: 16,
                        objectFit: 'cover'
                      }}
                    />
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#E6196E', 
                        fontFamily: '"Poppins", "Quicksand", sans-serif', 
                        fontWeight: 'bold' 
                      }}
                    >
                      Chiara
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ fontStyle: 'italic' }}
                    >
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
                </Paper>
              </Grid>
              {/* Gallery Preview */}
              <Grid item xs={12} md={8}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    borderRadius: '20px', 
                    backgroundColor: 'rgba(255,255,255,0.9)' 
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 3, 
                      color: '#00B575', 
                      fontFamily: '"Poppins", "Quicksand", sans-serif', 
                      fontWeight: 'bold' 
                    }}
                  >
                    My Art Gallery ✨
                  </Typography>

                  <KawaiiGallery items={artworks} columns={2} spacing={2} />

                  <Box sx={{ textAlign: 'center', mt: 3 }}>


                    <SocialButton 
                      variant="contained" 
                      color="primary"
                      sx={{ px: 4 }}
                      href="/fairies"
                    >
                      View Fairy Collection
                    </SocialButton>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </ProfileContainer>
      </Box>
    </PageTransition>
  );
};

export default ChiaraProfilePage;