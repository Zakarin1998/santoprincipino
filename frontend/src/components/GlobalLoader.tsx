import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';

const GlobalLoader: React.FC = () => {
  return (
    <Box 
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #FFF0F5 0%, #F0F8FF 100%)',
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }}
      >
        <CircularProgress 
          color="primary" 
          size={80} 
          thickness={4} 
          sx={{
            color: '#E6196E',
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            }
          }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.3,
          type: "spring",
          stiffness: 100
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            mt: 3, 
            color: '#E6196E', 
            fontFamily: '"Quicksand", sans-serif' 
          }}
        >
          Loading Chiara's Magical World ✨
        </Typography>
      </motion.div>
    </Box>
  );
};

export default GlobalLoader;