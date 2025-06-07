// src/components/LoaderFullScreen.tsx
import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const LoaderFullScreen: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    sx={{
      background: 'linear-gradient(135deg, #FFF0F5 0%, #F0F8FF 100%)',
    }}
  >
    <CircularProgress />
  </Box>
)

export default LoaderFullScreen
