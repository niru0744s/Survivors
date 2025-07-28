'use client';

import React from 'react';
import { Container, Typography, Link, IconButton, TextField, Button, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const paymentIcons = [
  'https://placehold.co/50x32/ffffff/000000?text=VISA',
  'https://placehold.co/50x32/ffffff/000000?text=MC',
  'https://placehold.co/50x32/ffffff/000000?text=AMEX',
  'https://placehold.co/50x32/ffffff/000000?text=PAYPAL',
];

const colors = {
  deepPurple: '#5409da',
  brightBlue: '#4e71ff',
  mediumBlue: '#8dd8ff',
  lightBlue: '#bbfbff',
  darkerBg: '#1c034a', // A slightly darker shade of the deep purple for contrast
  iconBg: '#3a069b', // A slightly lighter shade for icon backgrounds
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.darkerBg, // Use the new dark purple background
        color: 'white',
        py: 6,
        m: 0,
        borderTop: `4px solid ${colors.brightBlue}`, // Use the new bright blue for the border
      }}
    >
      <Container maxWidth="lg">
        {/* Main layout using Flexbox instead of Grid */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Stacks on mobile, row on desktop
            gap: 5, // Replaces Grid spacing
          }}
        >
          {/* Column 1: Logo and Social Icons (25% width on desktop) */}
          <Box sx={{ width: { xs: '100%', md: '25%' } }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
              SURVIVORS
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: colors.mediumBlue, mb: 2 }}>
              DAILY TOURNAMENTS
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: 'white', backgroundColor: colors.iconBg, mr: 1, '&:hover': { backgroundColor: colors.brightBlue } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: 'white', backgroundColor: colors.iconBg, mr: 1, '&:hover': { backgroundColor: colors.brightBlue } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: 'white', backgroundColor: colors.iconBg, '&:hover': { backgroundColor: colors.brightBlue } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Column 2: Navigation and Contact Info (41.66% width on desktop) */}
          <Box sx={{ width: { xs: '100%', md: '41.66%' } }}>
            <Box sx={{ display: 'flex', mb: 2, flexWrap: 'wrap' }}>
              {['HOME', 'BLOG', 'LOCATION', 'SALE', 'CONTACT'].map((item, index) => (
                <Link
                  href="#"
                  key={`${item}-${index}`}
                  variant="body2"
                  sx={{
                    color: 'white',
                    mr: 2,
                    mb: 1,
                    textDecoration: 'none',
                    '&:hover': { color: colors.lightBlue },
                    ...(item === 'HOME' && { color: colors.mediumBlue }), // Highlight 'HOME'
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
          </Box>

          {/* Column 3: Newsletter and Payment Icons (33.33% width on desktop) */}
          <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
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
                  backgroundColor: colors.iconBg,
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: colors.deepPurple,
                    },
                    '&:hover fieldset': {
                      borderColor: colors.brightBlue,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.brightBlue,
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
                  backgroundColor: colors.brightBlue,
                  '&:hover': {
                    backgroundColor: colors.mediumBlue,
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
