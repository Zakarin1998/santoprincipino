import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  TextField, 
  MenuItem, 
  CircularProgress, 
  styled 
} from '@mui/material';
import axios from 'axios';
import type { CommissionsInfo, CommissionType } from '../types';

const API_URL = 'http://localhost:5002/api';

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

const CommissionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  backgroundColor: '#FFF8FA',
  border: '3px solid #FFD1DC',
  boxShadow: '0 8px 16px rgba(255, 107, 152, 0.1)',
  marginBottom: theme.spacing(4)
}));

const CommissionTypeCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: '12px',
  border: '2px dashed #FFD1DC',
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(255, 107, 152, 0.2)',
  }
}));

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  border: '3px solid #FFD1DC',
  boxShadow: '0 8px 16px rgba(255, 107, 152, 0.1)',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  padding: '10px 30px',
  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
  fontWeight: 'bold',
  boxShadow: '0 4px 0 rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  marginTop: theme.spacing(3),
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 0 rgba(0,0,0,0.1)',
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: '0 2px 0 rgba(0,0,0,0.1)',
  }
}));

const KawaiiTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    transition: 'transform 0.2s ease',
    '& fieldset': {
      borderColor: '#FFD1DC',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: '#FF8FB1',
    },
    '&.Mui-focused': {
      transform: 'translateY(-2px)',
      '& fieldset': {
        borderColor: '#FF6B98',
        borderWidth: '2px',
      },
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: '"Quicksand", sans-serif',
    '&.Mui-focused': {
      color: '#FF6B98',
    },
  },
}));

const KawaiiCommissionsPage: React.FC = () => {
  const [commissionsInfo, setCommissionsInfo] = useState<CommissionsInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commissionType, setCommissionType] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CommissionsInfo>(`${API_URL}/chiara/commissions`);
        setCommissionsInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching commissions data:', error);
        setError('Failed to load commissions data. Please make sure the backend server is running.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this data to the backend
    console.log({ name, email, commissionType, description });
    // Show success message
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    setCommissionType('');
    setDescription('');
  };

  if (loading) {
    return (
      <PageContainer sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} sx={{ color: '#FF6B98' }} />
          <Typography variant="h6" sx={{ mt: 3, color: '#FF6B98', fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
            Loading commission information...
          </Typography>
        </Box>
      </PageContainer>
    );
  }

  if (error || !commissionsInfo) {
    return (
      <PageContainer sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center', maxWidth: 600 }}>
          <Typography variant="h5" color="error" gutterBottom>
            Oops! Something went wrong
          </Typography>
          <Typography variant="body1">
            {error || "We couldn't load commission information. Please try again later."}
          </Typography>
        </Box>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ContentContainer maxWidth="lg" className="page-transition-enter">
        <Typography 
          variant="h1" 
          className="kawaii-title kawaii-float" 
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Commission Info ✨
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            mb: 4,
            py: 1,
            px: 3,
            backgroundColor: commissionsInfo.status === 'open' ? '#D1FFD1' : '#FFD1DC',
            borderRadius: '30px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            width: 'fit-content',
            mx: 'auto',
            border: '2px dashed',
            borderColor: commissionsInfo.status === 'open' ? '#36B37E' : '#FF6B98',
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
              color: commissionsInfo.status === 'open' ? '#36B37E' : '#FF6B98',
              fontWeight: 'bold'
            }}
          >
            ✨ Commissions: {commissionsInfo.status.toUpperCase()} ✨
          </Typography>
          <Typography 
            variant="body1"
            sx={{ ml: 2, color: 'text.secondary' }}
          >
            Current wait time: {commissionsInfo.waitTime}
          </Typography>
        </Box>
        
        <CommissionCard>
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', color: '#FF6B98', fontFamily: '"Comic Sans MS", "Comic Sans", cursive', fontWeight: 'bold' }}>
            Commission Types
          </Typography>
          
          <Grid container spacing={3}>
            {commissionsInfo.types.map((commission, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <CommissionTypeCard
                  className="kawaii-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Typography variant="h6" sx={{ color: '#FF6B98', fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
                    {commission.type}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#36B37E', my: 1, fontWeight: 'bold' }}>
                    {commission.price}
                  </Typography>
                  <Typography variant="body2">
                    {commission.description}
                  </Typography>
                </CommissionTypeCard>
              </Grid>
            ))}
          </Grid>
        </CommissionCard>
        
        <CommissionCard>
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', color: '#FF6B98', fontFamily: '"Comic Sans MS", "Comic Sans", cursive', fontWeight: 'bold' }}>
            Please Note:
          </Typography>
          
          <Box sx={{ backgroundColor: '#FFF0F5', borderRadius: '12px', p: 3, border: '2px dashed #FFD1DC' }}>
            <Typography variant="body1" component="div">
              <ul>
                {commissionsInfo.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </Typography>
          </Box>
        </CommissionCard>
        
        <FormContainer>
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', color: '#FF6B98', fontFamily: '"Comic Sans MS", "Comic Sans", cursive', fontWeight: 'bold' }}>
            Request a Commission
          </Typography>
          
          {submitted ? (
            <Box sx={{ textAlign: 'center', py: 3 }}>
              <Typography variant="h6" sx={{ color: '#36B37E', mb: 2, fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
                Thank you for your request! ✨
              </Typography>
              <Typography variant="body1">
                I'll get back to you as soon as possible!
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ mt: 3 }}
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <KawaiiTextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <KawaiiTextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <KawaiiTextField
                    select
                    label="Commission Type"
                    variant="outlined"
                    fullWidth
                    required
                    value={commissionType}
                    onChange={(e) => setCommissionType(e.target.value)}
                  >
                    {commissionsInfo.types.map((option) => (
                      <MenuItem key={option.type} value={option.type}>
                        {option.type} ({option.price})
                      </MenuItem>
                    ))}
                  </KawaiiTextField>
                </Grid>
                <Grid item xs={12}>
                  <KawaiiTextField
                    label="Description of what you'd like"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <SubmitButton 
                    type="submit" 
                    variant="contained" 
                    color="secondary"
                    className="kawaii-pulse"
                    size="large"
                  >
                    Submit Request
                  </SubmitButton>
                </Grid>
              </Grid>
            </form>
          )}
        </FormContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default KawaiiCommissionsPage;