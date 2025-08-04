'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import './HeroSection.css'; // We'll create this CSS file next

const HeroSection = () => {
  return (
    <Box className="hero-section" id="home">
      <div className="hero-overlay" />
      <Container maxWidth="lg" className="hero-content">
        <Typography variant="h1" component="h1" className="hero-title">
          GRIND NOW, GLORY
          <br />
          LATER
        </Typography>
        <Typography variant="h4" component="p" className="hero-subtitle">
          <span className="hero-arrow">&gt;&gt;&gt;&gt;&gt;</span> SHOW YOUR
          <br />
          SKILL NOW
        </Typography>
        <Typography variant="body2" className="hero-presenter">
          Presented by <span className="presenter-name">SURVIVORS</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
