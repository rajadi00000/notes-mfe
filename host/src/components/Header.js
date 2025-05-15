import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchNote from './SearchNote';

export default ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ '--AppBar-background': 'black' }} position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <IconButton />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <SearchNote />
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};
