'use client';

import * as React from 'react';
import { Container, Typography, Button, Box, Divider } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

// Your new color palette
const colors = {
  deepPurple: '#5409da',
  brightBlue: '#4e71ff',
  mediumBlue: '#8dd8ff',
  lightBlue: '#bbfbff',
  darkerBg: '#10012B', // A very dark purple for the section background
};

// Define the types for the StatItem's props
interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

// A small component for the stat items to avoid repetition
const StatItem = ({ icon, value, label }: StatItemProps) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mr: 4, mb: 2 }}>
    {icon}
    <Box ml={1.5}>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ color: '#aaa' }}>
        {label}
      </Typography>
    </Box>
  </Box>
);

export default function WhyChooseUs() {
  return (
    <Box sx={{ backgroundColor: colors.darkerBg, color: 'white', py: 10 }}>
      <Container maxWidth="lg">
        {/* Main layout using Flexbox instead of Grid */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, // Stacks on mobile, row on desktop
            alignItems: 'center',
            gap: 6 // This replaces the Grid spacing
          }}
        >
          {/* Column 1: Character Image */}
          <Box sx={{ width: { xs: '100%', md: '41.66%' } }}> {/* 5/12 width */}
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 450 },
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: `0 10px 40px ${colors.brightBlue}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="image/character.png" 
                alt="Tournament Character in a battlefield"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>

          {/* Column 2: Text Content */}
          <Box sx={{ width: { xs: '100%', md: '58.34%' } }}> {/* 7/12 width */}
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
              WHY CHOOSE SURVIVORS
            </Typography>
            <Typography variant="body1" sx={{ color: colors.mediumBlue, mb: 2 }}>
              Compete with hundreds of players on a remote island for the ultimate showdown.
            </Typography>
            
            <Divider sx={{ borderColor: colors.brightBlue, width: '80px', my: 3 }} />

            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: colors.lightBlue, mb: 2 }}>
              10+ Years Experience In Gaming
            </Typography>
            <Typography variant="body1" sx={{ color: '#ccc', mb: 4 }}>
              We bring together players from all sectors, creating a fair and competitive environment. Our platform is built on years of knowledge to ensure a seamless and exciting tournament experience for everyone involved.
            </Typography>

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
              LEARN MORE
            </Button>

            {/* Stats Section */}
            <Box sx={{ display: 'flex', mt: 6, flexWrap: 'wrap' }}>
              <StatItem 
                icon={<EmojiEventsIcon sx={{ color: colors.mediumBlue, fontSize: 40 }} />}
                value="128+"
                label="Awards Winner"
              />
              <StatItem 
                icon={<GroupsIcon sx={{ color: colors.mediumBlue, fontSize: 40 }} />}
                value="32K+"
                label="Active Players"
              />
              <StatItem 
                icon={<SportsEsportsIcon sx={{ color: colors.mediumBlue, fontSize: 40 }} />}
                value="299+"
                label="Tournaments"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
