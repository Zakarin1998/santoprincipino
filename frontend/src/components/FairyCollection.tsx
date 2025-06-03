import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Chip,
  Container,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  styled,
  useTheme
} from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';

// Nuova porta 3030
const API_URL = 'http://localhost:3030/api';

// Styled components
const FairyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: '20px',
  overflow: 'hidden',
  border: '3px solid rgba(230, 25, 110, 0.3)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(230, 25, 110, 0.2)',
  }
}));

const FairyCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '100%', // 1:1 aspect ratio
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(0deg, rgba(255,240,245,1) 0%, rgba(255,240,245,0) 20%)',
    pointerEvents: 'none',
  }
}));

const FairyTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
}));

const PowerChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 600,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

// Types
interface Fairy {
  id: number;
  title: string;
  image: string;
  description: string;
  details?: string;
  powers?: string[];
  category: string;
}

interface FairyCollectionProps {
  title?: string;
  subtitle?: string;
}

const FairyCollection: React.FC<FairyCollectionProps> = ({ 
  title = "Magical Fairy Collection", 
  subtitle = "Discover the enchanting world of fairies through my illustrated collection" 
}) => {
  const [fairies, setFairies] = useState<Fairy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedFairy, setSelectedFairy] = useState<Fairy | null>(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const fetchFairies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/fairies`);
        setFairies(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching fairy collection:', err);
        setError('Failed to load the fairy collection. Please make sure the backend server is running on port 3030.');
        setLoading(false);
      }
    };

    fetchFairies();
  }, []);

  const handleClickOpen = (fairy: Fairy) => {
    setSelectedFairy(fairy);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 2,
            background: 'linear-gradient(45deg, #E6196E 30%, #00B575 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}
        >
          {subtitle}
        </Typography>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" my={8}>
          <CircularProgress color="primary" size={60} thickness={4} />
        </Box>
      ) : error ? (
        <Box textAlign="center" my={8}>
          <Typography color="error" variant="h6">{error}</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 3 }}
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </Box>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {fairies.map((fairy) => (
              <Grid item xs={12} sm={6} md={4} key={fairy.id}>
                <motion.div variants={itemVariants}>
                  <FairyCard>
                    <FairyCardMedia
                      image={fairy.image}
                      title={fairy.title}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <FairyTitle variant="h5">
                        {fairy.title}
                      </FairyTitle>
                      <Typography color="text.secondary" paragraph>
                        {fairy.description}
                      </Typography>
                      <Box mt={2}>
                        <Button 
                          variant="outlined" 
                          color="primary"
                          onClick={() => handleClickOpen(fairy)}
                          fullWidth
                          sx={{
                            borderRadius: '30px',
                            py: 1,
                            fontWeight: 600,
                            '&:hover': {
                              transform: 'translateY(-3px)',
                              boxShadow: '0 4px 8px rgba(230,25,110,0.2)'
                            }
                          }}
                        >
                          Discover More
                        </Button>
                      </Box>
                    </CardContent>
                  </FairyCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      )}

      {/* Fairy Details Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: '20px',
            backgroundImage: 'radial-gradient(#FFB6C1 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            border: '3px solid rgba(230,25,110,0.3)',
            overflow: 'hidden'
          }
        }}
      >
        {selectedFairy && (
          <>
            <DialogTitle sx={{ 
              textAlign: 'center', 
              pt: 3,
              fontWeight: 700,
              fontSize: '1.8rem',
              color: theme.palette.primary.main
            }}>
              {selectedFairy.title}
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <Box
                    component="img"
                    src={selectedFairy.image}
                    alt={selectedFairy.title}
                    sx={{
                      width: '100%',
                      borderRadius: '15px',
                      boxShadow: '0 10px 30px rgba(230,25,110,0.2)',
                      border: '3px solid rgba(230,25,110,0.2)',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant="h6" color="primary.dark" gutterBottom fontWeight={600}>
                    Description
                  </Typography>
                  <Typography paragraph color="text.primary">
                    {selectedFairy.description}
                  </Typography>
                  
                  {selectedFairy.details && (
                    <>
                      <Typography variant="h6" color="primary.dark" gutterBottom fontWeight={600} mt={2}>
                        Story
                      </Typography>
                      <Typography paragraph color="text.primary">
                        {selectedFairy.details}
                      </Typography>
                    </>
                  )}
                  
                  {selectedFairy.powers && selectedFairy.powers.length > 0 && (
                    <>
                      <Typography variant="h6" color="primary.dark" gutterBottom fontWeight={600} mt={2}>
                        Magical Powers
                      </Typography>
                      <Box mt={1}>
                        {selectedFairy.powers.map((power, index) => (
                          <PowerChip 
                            key={index} 
                            label={power} 
                            color={index % 2 === 0 ? "primary" : "secondary"}
                          />
                        ))}
                      </Box>
                    </>
                  )}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 3, justifyContent: 'center' }}>
              <Button 
                onClick={handleClose} 
                variant="contained" 
                color="primary"
                sx={{
                  borderRadius: '30px',
                  px: 4,
                  py: 1,
                  fontWeight: 600,
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default FairyCollection;