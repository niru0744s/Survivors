'use client';
import React from 'react'
import { Container, Grid, Typography, Link, IconButton, TextField, Button, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const paymentIcons = [
  'https://placehold.co/50x32/ffffff/000000?text=VISA',
  'https://placehold.co/50x32/ffffff/000000?text=MC',
  'https://placehold.co/50x32/ffffff/000000?text=AMEX',
  'https://placehold.co/50x32/ffffff/000000?text=PAYPAL',
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a', // Dark background for the main footer
        color: 'white',
        py: 6,
        borderTop: '4px solid #ff0000', // Red top border
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Column 1: Logo and Social Icons */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
              YOURSTORE
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: '#ff0000', mb: 2 }}>
              ONLINE SHOPPING
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: 'white', backgroundColor: '#333', mr: 1, '&:hover': { backgroundColor: '#ff0000' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: 'white', backgroundColor: '#333', mr: 1, '&:hover': { backgroundColor: '#ff0000' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: 'white', backgroundColor: '#333', '&:hover': { backgroundColor: '#ff0000' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: Navigation and Contact Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', mb: 2 }}>
              {['HOME', 'BLOG', 'LOCATION', 'SALE', 'BLOG', 'CONTACT'].map((item,index) => (
                <Link
                  href="#"
                   key={`${item}-${index}`}
                  variant="body2"
                  sx={{
                    color: 'white',
                    mr: 2,
                    textDecoration: 'none',
                    '&:hover': { color: '#ff0000' },
                    ...(item === 'HOME' && { color: '#ff0000' }) // Highlight 'HOME'
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
            <Typography variant="body2" sx={{ color: '#aaa', mb: 1 }}>
              Contact Us:
            </Typography>
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              My Company, 42 Dream House, Dreammy street, 7131 Dreamville, USA
              <br />
              Call Us Now: 0123-456-789, Email: yourmail@gmail.com
            </Typography>
          </Grid>

          {/* Column 3: Newsletter and Payment Icons */}
          <Grid item xs={12} md={4}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              SUBSCRIBE TO NEWS
            </Typography>
            <Box component="form" sx={{ display: 'flex', mb: 2 }}>
              <TextField
                suppressHydrationWarning={true}
                variant="outlined"
                size="small"
                placeholder="E-mail here"
                sx={{
                  backgroundColor: '#333',
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#555',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ff0000',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ff0000',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff0000',
                  '&:hover': {
                    backgroundColor: '#cc0000',
                  },
                  boxShadow: 'none',
                  borderRadius: '0 4px 4px 0',
                }}
              >
                &gt;
              </Button>
            </Box>
            <Box>
              {paymentIcons.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Payment method ${index + 1}`}
                  style={{ marginRight: '8px', height: '32px', borderRadius: '4px' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
