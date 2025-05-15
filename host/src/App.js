import React from 'react';
import { Box } from '@mui/material';
import AddNote from './components/AddNote';
import ListNote from './components/ListNote';
import Header from './components/Header';
import './App.css';

export default function App() {
  return (
    <main className='main'>
      <Header>
        <Box sx={{ padding: 2, width: '80%', margin: 'auto' }}>
          <AddNote />
          <ListNote />
        </Box>
      </Header>
    </main>
  );
}
