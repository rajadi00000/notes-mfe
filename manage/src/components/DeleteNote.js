import React from 'react';
import { Button } from '@mui/material';

export default ({ index, notes, setNotes }) => {
  const handleDelete = () => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));

    // Emit custom event for note deletion
    window.dispatchEvent(new CustomEvent('notesUpdated', { detail: newNotes }));
  };

  return (
    <Button
      onClick={() => handleDelete()}
      variant='contained'
      color='error'
      sx={{ mt: 2 }}
    >
      Delete
    </Button>
  );
};
