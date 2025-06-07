// src/components/Layout.tsx
import React from 'react'
import { Box } from '@mui/material'
import KawaiiNavbar from './KawaiiNavbar'
import CustomCursor from './CustomCursor'
import KawaiiFooter from './KawaiiFooter'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <KawaiiNavbar />
    <CustomCursor />
    <Box
      component="main"
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        pt: '64px',
      }}
    >
      {children}
    </Box>
    <KawaiiFooter />
  </>
)

export default Layout
