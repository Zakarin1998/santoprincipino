import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  TextField, 
  Button, 
  IconButton,
  Link,
  styled 
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#FFF0F5',
  backgroundImage: 'url("https://i.ibb.co/b5VB1Vz/saint-principino-001.jpg")',
  backgroundSize: '20px 20px',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8)
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  position: 'relative',
  background: `linear-gradient(135deg, #FFE6EE 0%, #F0F8FF 100%)`,
  borderRadius: '20px',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  border: '8px solid #FFD1DC',
  boxShadow: '0 10px 30px rgba(255, 182, 193, 0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("https://i.ibb.co/gMFVKdyz/ORU2DH0.jpg") repeat',
    backgroundSize: '100px',
    opacity: 0.05,
    pointerEvents: 'none',
    borderRadius: '12px',
  }
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  border: '3px solid #FFD1DC',
  boxShadow: '0 8px 16px rgba(255, 107, 152, 0.1)',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  backgroundColor: '#FFF0F5',
  border: '2px solid #FFD1DC',
  width: 60,
  height: 60,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    backgroundColor: '#FFE6EE',
  }
}));

const KawaiiTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    transition: 'transform 0.2s ease',
    '& fieldset': {
      borderColor: '#FFD1DC',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: '#FF8FB1',
    },
    '&.Mui-focused': {
      transform: 'translateY(-2px)',
      '& fieldset': {
        borderColor: '#FF6B98',
        borderWidth: '2px',
      },
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: '"Quicksand", sans-serif',
    '&.Mui-focused': {
      color: '#FF6B98',
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  padding: '10px 30px',
  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
  fontWeight: 'bold',
  boxShadow: '0 4px 0 rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  marginTop: theme.spacing(3),
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 0 rgba(0,0,0,0.1)',
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: '0 2px 0 rgba(0,0,0,0.1)',
  }
}));

const SocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  borderRadius: '12px',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
  margin: theme.spacing(1, 0),
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  border: '2px dashed #FFD1DC',
  '&:hover': {
    backgroundColor: 'rgba(255, 209, 220, 0.2)',
    transform: 'translateX(5px)',
  }
}));

const KawaiiContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this data to the backend
    console.log({ name, email, message });
    // Show success message
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  const socialLinks = [
    { 
      icon: <InstagramIcon sx={{ fontSize: 28, color: '#E1306C' }} />, 
      name: 'Instagram', 
      handle: '@chiaras_art', 
      url: 'https://instagram.com/chiaras_art' 
    },
    { 
      icon: <TwitterIcon sx={{ fontSize: 28, color: '#1DA1F2' }} />, 
      name: 'Twitter', 
      handle: '@chiaras_art', 
      url: 'https://twitter.com/chiaras_art' 
    },
    { 
      icon: <EmailIcon sx={{ fontSize: 28, color: '#FF6B98' }} />, 
      name: 'Email', 
      handle: 'chiara@kawaii-art.com', 
      url: 'mailto:chiara@kawaii-art.com' 
    },
  ];

  return (
    <PageContainer>
      <ContentContainer maxWidth="lg" className="page-transition-enter">
        <Typography 
          variant="h1" 
          className="kawaii-title kawaii-float" 
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Contact Me ✨
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <ContactCard>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  color: '#FF6B98', 
                  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
                  fontWeight: 'bold'
                }}
              >
                Let's Connect!
              </Typography>
              
              <Typography variant="body1" paragraph>
                Have a question about my art or interested in working together? Feel free to reach out through any of these channels!
              </Typography>
              
              <Box sx={{ my: 3, textAlign: 'center' }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <SocialLink href={social.url} target="_blank" rel="noopener">
                      <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                        {social.icon}
                      </Box>
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                          {social.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {social.handle}
                        </Typography>
                      </Box>
                    </SocialLink>
                  </motion.div>
                ))}
              </Box>
              
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    color: '#36B37E', 
                    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
                  }}
                >
                  Follow me on social media!
                </Typography>
                
                <Box>
                  <SocialButton color="primary" href="https://instagram.com/santoprincipino" target="_blank">
                    <InstagramIcon sx={{ fontSize: 32 }} />
                  </SocialButton>
                  <SocialButton color="primary" href="https://twitter.com/santoprincipino" target="_blank">
                    <TwitterIcon sx={{ fontSize: 32 }} />
                  </SocialButton>
                  <SocialButton color="primary" href="info@santoprincipino.com">
                    <EmailIcon sx={{ fontSize: 32 }} />
                  </SocialButton>
                </Box>
              </Box>
            </ContactCard>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <ContactCard>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  color: '#FF6B98', 
                  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
                  fontWeight: 'bold'
                }}
              >
                Send Me a Message
              </Typography>
              
              {submitted ? (
                <Box sx={{ textAlign: 'center', py: 3 }}>
                  <Typography variant="h6" sx={{ color: '#36B37E', mb: 2, fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
                    Message Sent! ✨
                  </Typography>
                  <Typography variant="body1">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 3 }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </Box>
              ) : (
                <form onSubmit={handleSubmit}>
                  <KawaiiTextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  
                  <KawaiiTextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  
                  <KawaiiTextField
                    label="Your Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  
                  <Box sx={{ textAlign: 'center' }}>
                    <SubmitButton 
                      type="submit" 
                      variant="contained" 
                      color="primary"
                      className="kawaii-pulse"
                      size="large"
                    >
                      Send Message
                    </SubmitButton>
                  </Box>
                </form>
              )}
            </ContactCard>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            mt: 4, 
            p: 3, 
            backgroundColor: '#FFF8FA', 
            borderRadius: '16px',
            border: '3px solid #FFD1DC',
            textAlign: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
              zIndex: -1,
              background: 'linear-gradient(45deg, #FFD1DC, #FF8FB1, #FFD1DC, #FF8FB1)',
              borderRadius: 20,
              opacity: 0.5,
              filter: 'blur(10px)',
            }
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#FF6B98', 
              fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
              fontWeight: 'bold',
              mb: 1
            }}
          >
            Response Time
          </Typography>
          <Typography variant="body1">
            I typically respond to all messages within 24-48 hours. For urgent inquiries, please reach out via Discord for the fastest response!
          </Typography>
        </Box>
      </ContentContainer>
    </PageContainer>
  );
};

export default KawaiiContactPage;