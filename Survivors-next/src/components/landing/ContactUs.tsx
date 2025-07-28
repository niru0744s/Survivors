'use client';

import React from 'react';
import { Container, Typography, TextField, Button, Box, IconButton, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Interface } from 'readline';

// Your established color palette
const colors = {
  deepPurple: '#5409da',
  brightBlue: '#4e71ff',
  mediumBlue: '#8dd8ff',
  lightBlue: '#bbfbff',
  darkerBg: '#10012B', 
  formBg: '#1c034a',   
  iconBg: '#3a069b',  
};

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

// A small component for the contact info items
const InfoItem = ({ icon, title, children }:InfoItemProps) => (
  <Box sx={{ display: 'flex', alignItems: 'start', mb: 3 }}>
    <Box sx={{ mr: 2, color: colors.mediumBlue }}>{icon}</Box>
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
      {children}
    </Box>
  </Box>
);

export default function ContactUs() {
  return (
    <Box sx={{ backgroundColor: colors.darkerBg, color: 'white', py: 10 }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6
          }}
        >
          {/* Column 1: The Form */}
          <Box sx={{ width: { xs: '100%', md: '60%' } }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
              GET IN TOUCH
            </Typography>
            <Typography variant="body2" sx={{ color: '#aaa', mb: 4 }}>
              Your email address will not be published. Required fields are marked *
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                required
                label="Name"
                variant="filled"
                sx={{ mb: 3, backgroundColor: colors.formBg }}
              />
              <TextField
                fullWidth
                required
                label="Email"
                variant="filled"
                sx={{ mb: 3, backgroundColor: colors.formBg }}
              />
              <TextField
                fullWidth
                label="Phone"
                variant="filled"
                sx={{ mb: 3, backgroundColor: colors.formBg }}
              />
              <TextField
                fullWidth
                required
                label="Your message"
                variant="filled"
                multiline
                rows={5}
                sx={{ mb: 3, backgroundColor: colors.formBg }}
              />
              <Button
              suppressHydrationWarning={true}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: colors.brightBlue,
                  fontWeight: 'bold',
                  px: 5,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: colors.mediumBlue,
                    color: colors.darkerBg
                  },
                }}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </Box>

          {/* Column 2: Contact Details Card */}
          <Box sx={{ width: { xs: '100%', md: '40%' } }}>
            <Box sx={{ backgroundColor: colors.formBg, p: 4, borderRadius: 2 }}>
              <InfoItem icon={<LocationOnIcon />} title="OUR ADDRESS">
                <Typography variant="body2" sx={{ color: '#ccc' }}>
                  2750 Quadra Street Victoria Road,
                  <br />
                  New York, USA
                </Typography>
              </InfoItem>

              <InfoItem icon={<PhoneIcon />} title="CONTACT">
                <Typography variant="body2" sx={{ color: '#ccc' }}>
                  Mobile: (+44) - 45789 - 5789
                  <br />
                  Mail: hello@survivors.com
                </Typography>
              </InfoItem>

              <InfoItem icon={<EmailIcon />} title="SOCIAL MEDIA">
                <Box>
                  <IconButton href="#" sx={{ color: 'white', '&:hover': { color: colors.brightBlue } }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="#" sx={{ color: 'white', '&:hover': { color: colors.brightBlue } }}>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="#" sx={{ color: 'white', '&:hover': { color: colors.brightBlue } }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton href="#" sx={{ color: 'white', '&:hover': { color: colors.brightBlue } }}>
                    <YouTubeIcon />
                  </IconButton>
                </Box>
              </InfoItem>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
