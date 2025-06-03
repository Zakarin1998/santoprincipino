import { Box, Container, Typography, Link, Grid, Stack, Divider, Button, Avatar } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImageIcon from '@mui/icons-material/Image';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { IMAGES, QUOTES } from '../assets/imageConstants';
import type { TokenData } from '../types';

interface FooterProps {
  tokenData: TokenData | null;
}

const Footer: React.FC<FooterProps> = ({ tokenData }) => {
  const currentYear = new Date().getFullYear();
  
  // Randomly select a quote
  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box component="footer">
      {/* Quote Section */}
      <Box 
        sx={{ 
          py: 8, 
          backgroundColor: '#F8F9FA',
          borderTop: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Container maxWidth="md">
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <FormatQuoteIcon 
              sx={{ 
                fontSize: 60, 
                color: 'primary.light',
                mb: 2,
                opacity: 0.5
              }} 
            />
            
            <Typography 
              variant="h4" 
              component="blockquote" 
              sx={{ 
                fontStyle: 'italic',
                fontWeight: 'light',
                mb: 3,
                color: 'text.primary',
                maxWidth: 700
              }}
            >
              "{randomQuote.text}"
            </Typography>
            
            <Typography 
              variant="subtitle1"
              component="cite"
              sx={{ 
                color: 'primary.main',
                fontWeight: 'medium'
              }}
            >
              — {randomQuote.author}
            </Typography>
          </Box>
        </Container>
      </Box>
      
      {/* Main Footer */}
      <Box 
        sx={{ 
          py: 6,
          backgroundColor: 'white', 
          borderTop: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar 
                  src={IMAGES.LOGO_JCD}
                  alt="JCD Logo"
                  sx={{ 
                    width: 48, 
                    height: 48,
                    mr: 1.5,
                    border: '2px solid',
                    borderColor: 'primary.main'
                  }}
                />
                <Box>
                  <Typography variant="h6" color="text.primary" fontWeight="bold">
                    {tokenData?.name || 'Jacky Chan Dollar'}
                  </Typography>
                  <Typography variant="caption" color="primary.main" fontWeight="medium">
                    {tokenData?.symbol || '$JCD'} • {tokenData?.tagline || '2018 Relic'}
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                A historical token from the early days of Uniswap's development. Now fully community-owned
                with a renounced contract.
              </Typography>
              
              <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                {tokenData && (
                  <>
                    <Link 
                      href={tokenData.socialLinks.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          transform: 'translateY(-3px)'
                        }
                      }}
                    >
                      <TelegramIcon fontSize="small" />
                    </Link>
                    <Link 
                      href={tokenData.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          transform: 'translateY(-3px)'
                        }
                      }}
                    >
                      <TwitterIcon fontSize="small" />
                    </Link>
                    <Link 
                      href={tokenData.socialLinks.opensea}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          transform: 'translateY(-3px)'
                        }
                      }}
                    >
                      <ImageIcon fontSize="small" />
                    </Link>
                  </>
                )}
              </Stack>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" color="text.primary" sx={{ mb: 3 }}>
                Quick Links
              </Typography>
              
              <Stack spacing={1.5}>
                <Link 
                  href="#tokenomics" 
                  color="text.secondary" 
                  underline="hover"
                  sx={{ 
                    display: 'block',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Tokenomics
                </Link>
                <Link 
                  href="#relics" 
                  color="text.secondary" 
                  underline="hover"
                  sx={{ 
                    display: 'block',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Ethereum Relics
                </Link>
                <Link 
                  href="#uniswap" 
                  color="text.secondary" 
                  underline="hover"
                  sx={{ 
                    display: 'block',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Uniswap Origins
                </Link>
                <Link 
                  href="#unicorn" 
                  color="text.secondary" 
                  underline="hover"
                  sx={{ 
                    display: 'block',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Unicorn Evolution
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" color="text.primary" sx={{ mb: 3 }}>
                Token Info
              </Typography>
              
              {tokenData && (
                <>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Contract Address:
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      display: 'block',
                      fontFamily: 'monospace',
                      bgcolor: '#F8F9FA',
                      p: 1.5,
                      borderRadius: 2,
                      mb: 2,
                      wordBreak: 'break-all',
                      border: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    {tokenData.contractAddress}
                  </Typography>
                  
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary" display="inline" fontWeight="medium">
                      Total Supply:
                    </Typography>
                    <Typography variant="body2" color="text.primary" display="inline" sx={{ ml: 1 }}>
                      {tokenData.tokenomics.totalSupply}
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="body2" color="text.secondary" display="inline" fontWeight="medium">
                      Buy/Sell Tax:
                    </Typography>
                    <Typography variant="body2" color="text.primary" display="inline" sx={{ ml: 1 }}>
                      {tokenData.tokenomics.taxBuy}/{tokenData.tokenomics.taxSell}
                    </Typography>
                  </Box>
                </>
              )}
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} {tokenData?.symbol || '$JCD'} | All rights reserved
            </Typography>
            
            <Button 
              variant="outlined" 
              color="primary" 
              size="small"
              onClick={scrollToTop}
              startIcon={<KeyboardArrowUpIcon />}
              sx={{ borderRadius: 30 }}
            >
              Back to top
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;