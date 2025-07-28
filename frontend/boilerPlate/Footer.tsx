'use client';

import React from 'react';
import { Container, Typography, Link, IconButton, TextField, Button, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Import the SVG icons as React components.
// You will need to create these files in the specified path.
import VisaIcon from '../public/svgs/VisaIcon';
import MastercardIcon from '../public/svgs/MastercardIcon';
import AmexIcon from '../public/svgs/AmexIcon';
import PayPalIcon from '../public/svgs/PayPalIcon';


const colors = {
  deepPurple: '#5409da',
  brightBlue: '#4e71ff',
  mediumBlue: '#8dd8ff',
  lightBlue: '#bbfbff',
  darkerBg: '#1c034a', // A slightly darker shade of the deep purple for contrast
  iconBg: '#3a069b', // A slightly lighter shade for icon backgrounds
  iconColor: '#8d99ae', // A subtle grey for the payment icons
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.darkerBg,
        color: 'white',
        py: 6,
        m: 0,
        borderTop: `4px solid ${colors.brightBlue}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 5,
          }}
        >
          {/* Column 1: Logo and Social Icons */}
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

          {/* Column 2: Navigation and Contact Info */}
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
                    ...(item === 'HOME' && { color: colors.mediumBlue }),
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

          {/* Column 3: Newsletter and Payment Icons */}
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
            
            {/* Using the imported SVG components */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2.5, color: colors.iconColor, '& svg': { transition: 'color 0.3s', '&:hover': { color: 'white' } } }}>
              <VisaIcon />
              <MastercardIcon />
              <AmexIcon />
              <PayPalIcon />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
