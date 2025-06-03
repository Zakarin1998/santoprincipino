import React, { useState, useEffect, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Alert, Snackbar, Box } from '@mui/material'
import axios from 'axios'
import type { ChiaraData } from './types'

// Lazy loading per i componenti
const KawaiiNavbar = React.lazy(() => import('./components/KawaiiNavbar'))
const CustomCursor = React.lazy(() => import('./components/CustomCursor'))
const ChiaraProfilePage = React.lazy(() => import('./pages/ChiaraProfilePage'))
const KawaiiGalleryPage = React.lazy(() => import('./pages/KawaiiGalleryPage'))
const KawaiiCommissionsPage = React.lazy(() => import('./pages/KawaiiCommissionsPage'))
const KawaiiAboutPage = React.lazy(() => import('./pages/KawaiiAboutPage'))
const KawaiiContactPage = React.lazy(() => import('./pages/KawaiiContactPage'))
const KawaiiFairyPage = React.lazy(() => import('./pages/KawaiiFairyPage'))
const KawaiiFooter = React.lazy(() => import('./components/KawaiiFooter'))

// Define API base URL
const API_URL = 'http://localhost:3030/api';

// Loader Component
const PageLoader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    sx={{
      background: 'linear-gradient(135deg, #FFF0F5 0%, #F0F8FF 100%)',
    }}
  >
    <div>Loading...</div>
  </Box>
)

function App() {
  const [chiaraData, setChiaraData] = useState<ChiaraData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ChiaraData>(`${API_URL}/chiara`);
        setChiaraData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Chiara data:', error);
        setError('Failed to load data. Please make sure the backend server is running on port 3030.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <KawaiiNavbar />
        <CustomCursor />

        <Box
          sx={{
            minHeight: 'calc(100vh - 64px)', // Sottrae l'altezza della navbar
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '64px', // Altezza della navbar
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ChiaraProfilePage />
                </Suspense>
              }
            />
            <Route
              path="/gallery"
              element={
                <Suspense fallback={<PageLoader />}>
                  <KawaiiGalleryPage />
                </Suspense>
              }
            />
            <Route
              path="/commissions"
              element={
                <Suspense fallback={<PageLoader />}>
                  <KawaiiCommissionsPage />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <KawaiiAboutPage />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <KawaiiContactPage />
                </Suspense>
              }
            />
            <Route
              path="/fairies"
              element={
                <Suspense fallback={<PageLoader />}>
                  <KawaiiFairyPage />
                </Suspense>
              }
            />
          </Routes>
        </Box>

        <Suspense fallback={<div />}>
          <KawaiiFooter />
        </Suspense>
      </Suspense>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  )
}

export default App