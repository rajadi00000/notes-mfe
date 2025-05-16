import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import searchIcon from '../../public/images/search.svg';
import clearIcon from '../../public/images/clear.svg';

export default () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('notes');

    if (data) {
      const notes = JSON.parse(data);
      const newNotes = notes.filter((note) =>
        note.toLowerCase().includes(search.toLowerCase())
      );
      // Emit custom event for note deletion
      window.dispatchEvent(
        new CustomEvent('notesUpdated', { detail: newNotes })
      );
    }
  }, [search]);

  const handleClearButton = () => {
    setSearch('');
  };

  return (
    <div>
      <TextField
        title='Search Notes'
        sx={{
          background: 'white',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Default border color
            },
            '&:hover fieldset': {
              borderColor: 'white', // On hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', // On focus
            },
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start'>
                <img
                  title='Search'
                  src={searchIcon}
                  alt='search'
                  width={'20px'}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <Button title='Clear' onClick={handleClearButton}>
                  <img src={clearIcon} alt='clear' width={'20px'} />
                </Button>
              </InputAdornment>
            ),
          },
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search Notes'
        variant='outlined'
        fullWidth
      />
    </div>
  );
};
