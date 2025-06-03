import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Grid, Divider, Avatar, CircularProgress, styled } from '@mui/material';
import axios from 'axios';
import type { ChiaraProfile } from '../types';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:5000/api';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#FFF0F5',
  backgroundImage: 'url("https://i.ibb.co/LDBd4nRj/cielo-rosa.png")',
  backgroundSize: '20px 20px',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8)
}));

const ContentContainer = styled(Container)(({ theme }) => ({
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
    background: 'url("https://i.ibb.co/gMFVKdyz/ORU2DH0.jpg") repeat',
    backgroundSize: '100px',
    opacity: 0.05,
    pointerEvents: 'none',
    borderRadius: '12px',
  }
}));

const AboutCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  border: '3px solid #FFD1DC',
  boxShadow: '0 8px 16px rgba(255, 107, 152, 0.1)',
  marginBottom: theme.spacing(4)
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  border: '5px solid #FFD1DC',
  boxShadow: '0 8px 16px rgba(255, 107, 152, 0.2)',
}));

const SkillChip = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  padding: '8px 16px',
  margin: '4px',
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #FF6B98 0%, #FF8FB1 100%)',
  color: 'white',
  fontWeight: 'bold',
  boxShadow: '0 4px 8px rgba(255, 107, 152, 0.2)',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
  }
}));

const QuoteBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#FFF0F5',
  borderRadius: '16px',
  border: '2px dashed #FFD1DC',
  position: 'relative',
  margin: theme.spacing(4, 0),
  '&::before': {
    content: '"❝"',
    position: 'absolute',
    top: -30,
    left: 20,
    fontSize: '60px',
    color: '#FF6B98',
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
  },
  '&::after': {
    content: '"❞"',
    position: 'absolute',
    bottom: -50,
    right: 20,
    fontSize: '60px',
    color: '#FF6B98',
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
  }
}));

const KawaiiAboutPage: React.FC = () => {
  const [profileData, setProfileData] = useState<ChiaraProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ChiaraProfile>(`${API_URL}/chiara/profile`);
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Failed to load profile data. Please make sure the backend server is running.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <PageContainer sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} sx={{ color: '#FF6B98' }} />
          <Typography variant="h6" sx={{ mt: 3, color: '#FF6B98', fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
            Loading about me...
          </Typography>
        </Box>
      </PageContainer>
    );
  }

  if (error || !profileData) {
    return (
      <PageContainer sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center', maxWidth: 600 }}>
          <Typography variant="h5" color="error" gutterBottom>
            Oops! Something went wrong
          </Typography>
          <Typography variant="body1">
            {error || "We couldn't load profile information. Please try again later."}
          </Typography>
        </Box>
      </PageContainer>
    );
  }

  // Skills array - in a real app, this would come from the API
  const skills = [
    "Digital Art", "Character Design", "Illustration", 
    "Kawaii Style", "Chibi Art", "Sticker Design", 
    "Emote Creation", "Pastel Coloring", "Procreate", 
    "Adobe Illustrator", "Clip Studio Paint"
  ];

  // Fun facts about Chiara
  const funFacts = [
    "I have a collection of over 100 plushies!",
    "My favorite drink is strawberry bubble tea with extra pearls",
    "I've been drawing since I was 5 years old",
    "My art was featured in a local exhibition last year",
    "I name all my digital brushes after desserts",
    "I can draw a perfect circle freehand"
  ];

  return (
    <PageContainer>
      <ContentContainer maxWidth="lg" className="page-transition-enter">
        <Typography 
          variant="h1" 
          className="kawaii-title kawaii-float" 
          sx={{ textAlign: 'center', mb: 4 }}
        >
          About Me ✨
        </Typography>
        
        <AboutCard>
          <AvatarContainer>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <LargeAvatar src={profileData.avatarImage} alt={profileData.name} />
            </motion.div>
          </AvatarContainer>
          
          <Typography 
            variant="h4" 
            align="center"
            sx={{ 
              mb: 1, 
              color: '#FF6B98', 
              fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
              fontWeight: 'bold' 
            }}
          >
            {profileData.name}
          </Typography>
          
          <Typography 
            variant="h6" 
            align="center"
            sx={{ 
              mb: 3, 
              color: 'text.secondary',
              fontFamily: '"Quicksand", sans-serif', 
            }}
          >
            {profileData.subtitle}
          </Typography>
          
          <Divider sx={{ mb: 3, borderColor: '#FFD1DC' }} />
          
          <Typography variant="body1" paragraph>
            {profileData.bio}
          </Typography>
          
          {profileData.bioDetails.map((detail, index) => (
            <Typography key={index} variant="body1" paragraph>
              {detail}
            </Typography>
          ))}
          
          <QuoteBox>
            <Typography 
              variant="h6" 
              align="center"
              sx={{ 
                fontStyle: 'italic',
                color: '#FF6B98',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 'medium', 
              }}
            >
              "I believe that art should bring joy and smiles to people's faces. That's why I love creating cute, kawaii illustrations that make people happy!"
            </Typography>
          </QuoteBox>
        </AboutCard>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <AboutCard>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  color: '#FF6B98', 
                  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
                  fontWeight: 'bold'
                }}
              >
                My Skills
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    style={{ display: 'inline-block' }}
                  >
                    <SkillChip>{skill}</SkillChip>
                  </motion.div>
                ))}
              </Box>
              
              <Typography variant="body1" paragraph>
                I specialize in creating adorable digital art with a focus on character design and kawaii aesthetics. My illustrations are perfect for social media, branding, and personal projects that need a cute touch!
              </Typography>
            </AboutCard>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <AboutCard>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  color: '#FF6B98', 
                  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
                  fontWeight: 'bold'
                }}
              >
                Fun Facts About Me
              </Typography>
              
              <Box component="ul" sx={{ pl: 3 }}>
                {funFacts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.4 }}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ mb: 2, fontFamily: '"Quicksand", sans-serif' }}
                    >
                      {fact}
                    </Typography>
                  </motion.li>
                ))}
              </Box>
            </AboutCard>
          </Grid>
        </Grid>
      </ContentContainer>
    </PageContainer>
  );
};

export default KawaiiAboutPage;