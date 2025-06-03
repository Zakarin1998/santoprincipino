import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import './index.css'
import './assets/fonts.css'
import kawaiiTheme from './themes/kawaiitheme'
import GlobalLoader from './components/GlobalLoader'

// Lazy loading per i componenti principali
const App = React.lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={kawaiiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<GlobalLoader />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)