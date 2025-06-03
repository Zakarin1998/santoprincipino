import { Box, Container, Typography, Button, Grid, Link, Paper, Stack, Chip, Avatar } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImageIcon from '@mui/icons-material/Image';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { IMAGES } from '../assets/imageConstants';
import type { TokenData } from '../types';

interface HeroSectionProps {
  tokenData: TokenData | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ tokenData }) => {
  if (!tokenData) {
    return (
      <Box 
        sx={{ 
          py: 12, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #F8F9FA 0%, #F1F3F5 100%)'
        }}
      >
        <Typography variant="h3">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #FFF5F8 0%, #F8F9FA 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '300px', 
          height: '300px', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(255,107,152,0.1) 0%, rgba(255,107,152,0) 70%)', 
          right: '5%', 
          top: '10%',
          zIndex: 0
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '400px', 
          height: '400px', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(54,179,126,0.08) 0%, rgba(54,179,126,0) 70%)', 
          left: '0%', 
          bottom: '0%',
          zIndex: 0
        }} 
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: { xs: 2, md: 4 } }}>
              <Chip 
                label="Original 2018 Relic" 
                color="primary" 
                size="small"
                icon={<WorkspacePremiumIcon />} 
                sx={{ 
                  mb: 3, 
                  fontWeight: 'medium',
                  px: 1,
                  '& .MuiChip-icon': { fontSize: 16 }
                }}
              />
              
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  mb: 2,
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #FF6B98 0%, #36B37E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1
                }}
              >
                {tokenData.name}
              </Typography>
              
              <Typography 
                variant="h4" 
                color="text.secondary" 
                sx={{ 
                  mb: 3,
                  fontWeight: 'normal',
                  maxWidth: 550
                }}
              >
                An <Box component="span" color="primary.main" fontWeight="medium">original token</Box> that 
                helped test and develop Uniswap's first decentralized exchange
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px' }}>
                Now fully community-owned with renounced contract and strong tokenomics. 
                Join a piece of Ethereum's DeFi history.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  href={tokenData.chart}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ px: 4, py: 1.5 }}
                >
                  View Chart
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  sx={{ px: 4, py: 1.5 }}
                >
                  Buy Now
                </Button>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="subtitle2" color="text.secondary">
                  Community:
                </Typography>
                <Link 
                  href={tokenData.socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 107, 152, 0.08)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 107, 152, 0.15)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <TelegramIcon />
                </Link>
                <Link 
                  href={tokenData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 107, 152, 0.08)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 107, 152, 0.15)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <TwitterIcon />
                </Link>
                <Link 
                  href={tokenData.socialLinks.opensea}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 107, 152, 0.08)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 107, 152, 0.15)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <ImageIcon />
                </Link>
              </Stack>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              {/* Main token image */}
              <Box
                component="img"
                src={IMAGES.DECORATIVE_COIN}
                alt="JCD Coin"
                sx={{
                  width: { xs: '80%', sm: '70%', md: '80%' },
                  maxWidth: 450,
                  filter: 'drop-shadow(0 20px 30px rgba(255, 107, 152, 0.2))',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                    '100%': { transform: 'translateY(0px)' }
                  }
                }}
              />
              
              {/* Token highlights card */}
              <Paper
                elevation={0}
                sx={{
                  position: 'absolute',
                  bottom: { xs: '-10%', md: '10%' },
                  right: { xs: '10%', md: '0%' },
                  p: 3,
                  borderRadius: 4,
                  width: { xs: '85%', md: '65%' },
                  maxWidth: 320,
                  backdropFilter: 'blur(8px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  transform: 'rotate(2deg)',
                  zIndex: 3
                }}
              >
                <Typography 
                  variant="subtitle1" 
                  fontWeight="bold" 
                  color="text.primary"
                  gutterBottom
                >
                  Token Highlights
                </Typography>
                
                <Stack spacing={1.5} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <VerifiedIcon fontSize="small" color="secondary" />
                    <Typography variant="body2">Contract Verified & Renounced</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocalFireDepartmentIcon fontSize="small" sx={{ color: '#FF8C38' }} />
                    <Typography variant="body2">44% Tokens Burned</Typography>
                  </Box>
                </Stack>
                
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    backgroundColor: 'rgba(54, 179, 126, 0.1)',
                    p: 1.5,
                    borderRadius: 2,
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="caption" color="text.secondary">Current Market Cap</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowDropUpIcon sx={{ color: 'secondary.main' }} />
                    <Typography variant="subtitle2" fontWeight="bold" color="secondary.main">
                      {tokenData.tokenomics.marketCap}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
              
              {/* Contract card */}
              <Paper
                elevation={0}
                sx={{
                  position: 'absolute',
                  top: { xs: '-5%', md: '5%' },
                  left: { xs: '5%', md: '5%' },
                  p: 2,
                  borderRadius: 4,
                  width: { xs: '75%', md: '55%' },
                  maxWidth: 280,
                  backdropFilter: 'blur(8px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  transform: 'rotate(-3deg)',
                  zIndex: 2
                }}
              >
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                >
                  Contract Address
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar 
                    src={IMAGES.ICON_ETHEREUM} 
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'monospace', 
                      fontSize: '0.75rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {tokenData.contractAddress}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;