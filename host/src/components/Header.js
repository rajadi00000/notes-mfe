import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchNote from './SearchNote';
import NotesIcon from '../../public/images/notes-icon.svg';

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
          >
            <img
              src={NotesIcon}
              alt='Notes-MFE'
              width={'50px'}
              height={'40px'}
            />
          </IconButton>
          <Typography variant='h6'>Notes-MFE</Typography>
          <Box
            sx={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'center',
              padding: '10px 0px',
            }}
          >
            <SearchNote />
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};
