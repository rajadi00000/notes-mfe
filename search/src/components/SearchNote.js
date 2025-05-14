import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

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

  return (
    <div>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label='Search Notes'
        variant='outlined'
        fullWidth
      />
    </div>
  );
};
