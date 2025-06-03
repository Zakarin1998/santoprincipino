import { Box, Container, Typography, Link, Grid } from '@mui/material';

import type { TokenData } from '../types';

interface FooterProps {
  tokenData: TokenData | null;
}

const Footer: React.FC<FooterProps> = ({ tokenData }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6, 
        mt: 4,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {tokenData?.name || 'Jacky Chan Dollar'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "The best fights are the ones we avoid." – Jacky Chan
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links
            </Typography>
            {tokenData && (
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Link 
                  href={tokenData.socialLinks.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  color="secondary"
                  sx={{ mb: 1 }}
                >
                  Telegram
                </Link>
                <Link 
                  href={tokenData.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  color="secondary"
                  sx={{ mb: 1 }}
                >
                  Twitter
                </Link>
                <Link 
                  href={tokenData.socialLinks.opensea} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  color="secondary"
                >
                  OpenSea Collection
                </Link>
              </Box>
            )}
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contract
            </Typography>
            {tokenData && (
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  wordBreak: 'break-all',
                  fontSize: '0.75rem'
                }}
              >
                {tokenData.contractAddress}
              </Typography>
            )}
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {currentYear} {tokenData?.symbol || '$JCD'} | All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;