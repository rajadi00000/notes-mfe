import React from 'react';
import { Box } from '@mui/material';
import SearchNote from './components/SearchNote';
import AddNote from './components/AddNote';
import ListNote from './components/ListNote';

export default function App() {
  return (
    <Box sx={{ padding: 2 }}>
      <SearchNote />
      <AddNote />
      <ListNote />
    </Box>
  );
}
