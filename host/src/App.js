import React from 'react';
import {Box} from "@mui/material"
import SearchNote from './components/SearchNote'
import ManageNote from './components/ManageNote'
import ListNote from './components/ListNote'

export default function App() {
  return (
    <Box sx={{ padding: 2 }}>
      <SearchNote />
      <ManageNote />
      <ListNote />
    </Box>
  );
}
