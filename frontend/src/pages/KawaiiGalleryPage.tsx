import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Chip, Stack, CircularProgress, styled } from '@mui/material';
import axios from 'axios';
import KawaiiGallery from '../components/KawaiiGallery';
import type { GalleryItem } from '../types';

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

const GalleryContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  border: '3px solid #FFD1DC',
  boxShadow: '0 8px 16px rgba(255, 107, 152, 0.1)',
}));

const FilterChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: '16px',
  fontFamily: '"Quicksand", "Comic Sans MS", sans-serif',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  '&.MuiChip-filled': {
    background: 'linear-gradient(135deg, #FF6B98 0%, #FF8FB1 100%)',
    color: 'white',
    boxShadow: '0 4px 8px rgba(255, 107, 152, 0.3)',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
  }
}));

const KawaiiGalleryPage: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredGallery, setFilteredGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<GalleryItem[]>(`${API_URL}/chiara/gallery`);
        setGallery(response.data);
        setFilteredGallery(response.data);
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(response.data.map(item => item.category))
        );
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
        setError('Failed to load gallery data. Please make sure the backend server is running.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredGallery(gallery);
    } else {
      setFilteredGallery(gallery.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, gallery]);

  if (loading) {
    return (
      <PageContainer sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} sx={{ color: '#FF6B98' }} />
          <Typography variant="h6" sx={{ mt: 3, color: '#FF6B98', fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
            Loading Chiara's artwork...
          </Typography>
        </Box>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center', maxWidth: 600 }}>
          <Typography variant="h5" color="error" gutterBottom>
            Oops! Something went wrong
          </Typography>
          <Typography variant="body1">
            {error}
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
          Art Gallery ✨
        </Typography>
        
        <GalleryContainer>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 2, color: '#FF6B98', fontFamily: '"Comic Sans MS", "Comic Sans", cursive', fontWeight: 'bold' }}>
              Filter by Category:
            </Typography>
            
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <FilterChip 
                label="All Artwork" 
                onClick={() => setSelectedCategory('all')} 
                color={selectedCategory === 'all' ? 'primary' : 'default'}
                variant={selectedCategory === 'all' ? 'filled' : 'outlined'}
              />
              
              {categories.map(category => (
                <FilterChip 
                  key={category}
                  label={category.charAt(0).toUpperCase() + category.slice(1)}
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? 'primary' : 'default'}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                />
              ))}
            </Stack>
          </Box>
          
          <KawaiiGallery 
            items={filteredGallery} 
            columns={3} 
            spacing={3}
          />
        </GalleryContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default KawaiiGalleryPage;