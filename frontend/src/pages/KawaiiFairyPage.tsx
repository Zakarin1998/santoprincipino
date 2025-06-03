import React from 'react';
import { Box, Container, Typography, Paper, styled } from '@mui/material';
import KawaiiNavbar from '../components/KawaiiNavbar';
import FairyCollection from '../components/FairyCollection';
import KawaiiFooter from '../components/KawaiiFooter';
import { motion } from 'framer-motion';

// Styled components
const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const HeroSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(12, 3, 8, 3),
  borderRadius: 0,
  backgroundImage: 'linear-gradient(135deg, #FFF0F5 0%, #F8F0FF 100%)',
  backgroundSize: 'cover',
  marginBottom: theme.spacing(6),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(#FFB6C1 1.5px, transparent 1.5px), radial-gradient(#B28DFF 1.5px, transparent 1.5px)',
    backgroundSize: '30px 30px, 30px 30px',
    backgroundPosition: '0 0, 15px 15px',
    opacity: 0.5,
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const HighlightedText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

const KawaiiFairyPage = () => {
  return (
    <PageWrapper>
      <KawaiiNavbar />
      
      <ContentWrapper>
        <HeroSection>
          <Container maxWidth="md">
            <Box textAlign="center" position="relative" zIndex={1}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h2" 
                  component="h1" 
                  fontWeight={800} 
                  mb={3}
                  sx={{
                    background: 'linear-gradient(45deg, #E6196E 30%, #00B575 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Enchanted Fairy Collection
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography 
                  variant="h5" 
                  color="text.secondary" 
                  maxWidth={700} 
                  mx="auto" 
                  mb={5}
                >
                  Step into a world of <HighlightedText>magic and wonder</HighlightedText> with my handcrafted fairy illustrations, each with their own unique powers and stories.
                </Typography>
              </motion.div>
            </Box>
          </Container>
        </HeroSection>
        
        <FairyCollection 
          title="Meet the Fairy Guardians" 
          subtitle="Each fairy has unique magical powers and a special role in the enchanted world"
        />
        
        <Box my={8} textAlign="center">
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" fontWeight={700} mb={4} color="primary.dark">
              About My Fairy Illustrations
            </Typography>
            <Typography variant="body1" paragraph color="text.primary" fontSize="1.1rem">
              My passion for the magical world of fairies started when I was a child. I've always been fascinated by these mystical beings and the enchantment they bring to our imagination. Each fairy in my collection is carefully designed with their own personality, powers, and backstory.
            </Typography>
            <Typography variant="body1" paragraph color="text.primary" fontSize="1.1rem">
              I use a combination of traditional sketching and digital painting techniques to bring these magical creatures to life. The soft color palette and dreamy atmosphere aim to transport you to their enchanted realm.
            </Typography>
            <Typography variant="body1" color="text.primary" fontSize="1.1rem">
              I hope these illustrations spark joy and wonder in your heart, just as creating them has done for me!
            </Typography>
          </Container>
        </Box>
      </ContentWrapper>
      
      <KawaiiFooter />
    </PageWrapper>
  );
};

export default KawaiiFairyPage;