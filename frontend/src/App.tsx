import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider, Alert, Snackbar } from '@mui/material'
import ChiaraProfilePage from './pages/ChiaraProfilePage'
import KawaiiNavbar from './components/KawaiiNavbar'
import CustomCursor from './components/CustomCursor'
import KawaiiGalleryPage from './pages/KawaiiGalleryPage'
import KawaiiCommissionsPage from './pages/KawaiiCommissionsPage'
import KawaiiAboutPage from './pages/KawaiiAboutPage'
import KawaiiContactPage from './pages/KawaiiContactPage'
import KawaiiFairyPage from './pages/KawaiiFairyPage'
import axios from 'axios'
import type { ChiaraData } from './types'
import kawaiiTheme from './themes/kawaiitheme'

// Define API base URL (nuova porta 3030)
const API_URL = 'http://localhost:3030/api';
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
    <ThemeProvider theme={kawaiiTheme}>
      <CssBaseline />
          <CustomCursor />
      <Routes>
        <Route 
          path="/" 
          element={<ChiaraProfilePage />} 
        />
        <Route
          path="/gallery"
          element={<KawaiiGalleryPage />}
        />
        <Route
          path="/commissions"
          element={<KawaiiCommissionsPage />}
        />
        <Route
          path="/about"
          element={<KawaiiAboutPage />}
        />
        <Route
          path="/contact"
          element={<KawaiiContactPage />}
        />
        <Route
          path="/fairies"
          element={<KawaiiFairyPage />}
        />
      </Routes>
      
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
    </ThemeProvider>
  )
}

export default App