'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { 
    Box, 
    Drawer, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    useMediaQuery 
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import Logo from '../Public/image/Logo_noBG.png';
import CloseIcon from '@mui/icons-material/Close';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
) => {
    if (event.type === 'keydowm' && (
        (event as React.KeyboardEvent).key === 'Tab' || 
        (event as React.KeyboardEvent).key === 'shift'
    )) {
        return;
    }

    setDrawerOpen(open);
  };

  const Links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About us', path: '/aboutUs' },
    { name: 'Gaming', path: '/gaming' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contactUs' },
    { name: 'Log in', path: '/login' }
  ]

  return (
    <AppBar 
    position='static'
    >
        <ToolBar>
            <Box 
            sx={{ flexGrow: 1 }}
            >
                <img 
                src="image/Logo_noBG.png" 
                alt='logo' 
                style={{ height: 40 }} 
                />
            </Box>

            {isMobile ? (
                <>
                    <IconButton
                      edge='end'
                      color='inherit'
                      aria-label='menu'
                      onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                      anchor='right'
                      open={drawerOpen}
                      onClose={toggleDrawer(false)}
                    >
                        <Box
                          sx={{ width: 200}}
                          role='presentation'
                          onClick={toggleDrawer(false)}
                          onKeyDown={toggleDrawer(false)}
                        >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 1
                              }}
                            >
                                <IconButton
                                  onClick={toggleDrawer(false)}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <List>
                                {Links.map((Link) => (
                                    <ListItem
                                      key={Link.name}
                                      disablePadding
                                    >
                                        <ListItemButton
                                          component='a'
                                          href={Link.path}
                                        >
                                            <ListItemText 
                                              primary={Link.name} 
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </>
            ) : (
                <>
                    <Box
                      sx={{
                        display: 'flex'
                      }}
                    >
                        {Links.map((Link) => (
                            <ListItem
                              key={Link.name}
                              disablePadding
                              sx={{
                                // display: 'inline-block',
                                ml: 2
                              }}
                              className='nav-liks'
                            >
                                <ListItemButton
                                  component='a'
                                  href={Link.path}
                                  className='nav-link'
                                >
                                    <ListItemText 
                                      primary={Link.name}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Box>
                </>
            )}
        </ToolBar>
    </AppBar>
  )
}

export default Navbar;