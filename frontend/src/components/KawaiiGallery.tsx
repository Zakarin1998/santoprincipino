import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Dialog, 
  DialogContent, 
  IconButton, 
  useTheme, 
  useMediaQuery,
  styled
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Tipi per la galleria
interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface KawaiiGalleryProps {
  items: GalleryItem[];
  columns?: number;
  spacing?: number;
  showTitle?: boolean;
}

// Stili personalizzati
const GalleryItemContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 24px rgba(255, 107, 152, 0.2)',
    '& .image-overlay': {
      opacity: 1,
    },
  },
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  }
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 107, 152, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(2),
  opacity: 0,
  transition: 'opacity 0.3s ease',
  borderRadius: '16px',
}));

const LightboxNavButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  margin: theme.spacing(1),
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
}));

const KawaiiGallery: React.FC<KawaiiGalleryProps> = ({ 
  items, 
  columns = 3, 
  spacing = 3,
  showTitle = true
}) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Calcola il numero di colonne in base alla dimensione dello schermo
  const responsiveColumns = isMobile ? 1 : (isTablet ? 2 : columns);

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrevious = () => {
    if (selectedItem) {
      const currentIndex = items.findIndex(item => item.id === selectedItem.id);
      const newIndex = (currentIndex - 1 + items.length) % items.length;
      setSelectedItem(items[newIndex]);
    }
  };

  const handleNext = () => {
    if (selectedItem) {
      const currentIndex = items.findIndex(item => item.id === selectedItem.id);
      const newIndex = (currentIndex + 1) % items.length;
      setSelectedItem(items[newIndex]);
    }
  };

  return (
    <>
      <Grid container spacing={spacing}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={12 / responsiveColumns} key={item.id}>
            <GalleryItemContainer onClick={() => handleItemClick(item)}>
              <img src={item.image} alt={item.title} />
              <ImageOverlay className="image-overlay">
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'white', 
                    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                  }}
                >
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'white',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    {item.description}
                  </Typography>
                )}
              </ImageOverlay>
            </GalleryItemContainer>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Dialog */}
      <Dialog
        open={lightboxOpen}
        onClose={handleCloseLightbox}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backgroundImage: 'radial-gradient(#FFB6C1 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(255, 107, 152, 0.3)',
            border: '3px solid #FFD1DC',
          }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            aria-label="close"
            onClick={handleCloseLightbox}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#FF6B98',
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent sx={{ p: 0, overflow: 'hidden', position: 'relative' }}>
            {selectedItem && (
              <>
                <Box sx={{ position: 'relative', textAlign: 'center' }}>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '70vh',
                      margin: '0 auto',
                      display: 'block',
                      borderRadius: '12px',
                    }}
                  />
                  
                  {/* Navigation buttons */}
                  <Box sx={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: 0, 
                    right: 0, 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    transform: 'translateY(-50%)',
                    px: 2,
                  }}>
                    <LightboxNavButton onClick={handlePrevious} aria-label="previous image">
                      <NavigateBeforeIcon />
                    </LightboxNavButton>
                    
                    <LightboxNavButton onClick={handleNext} aria-label="next image">
                      <NavigateNextIcon />
                    </LightboxNavButton>
                  </Box>
                </Box>
                
                {showTitle && (
                  <Box sx={{ 
                    p: 3, 
                    textAlign: 'center', 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderTop: '2px dashed #FFD1DC',
                    mt: 2
                  }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 1, 
                        color: '#FF6B98', 
                        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
                      }}
                    >
                      {selectedItem.title}
                    </Typography>
                    {selectedItem.description && (
                      <Typography variant="body1" color="text.secondary">
                        {selectedItem.description}
                      </Typography>
                    )}
                  </Box>
                )}
              </>
            )}
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};

export default KawaiiGallery;