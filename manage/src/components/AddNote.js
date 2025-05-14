import React from 'react';
import { TextField, Button } from '@mui/material';

export default () => {
  const [note, setNote] = React.useState('');
  const [notes, setNotes] = React.useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAdd = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
      localStorage.setItem('notes', JSON.stringify([...notes, note]));
    }
  };

  return (
    <div>
      <TextField
        label='Add Note'
        value={note}
        onChange={(e) => setNote(e.target.value)}
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <Button onClick={handleAdd} variant='contained' sx={{ mt: 2 }}>
        Add Note
      </Button>
    </div>
  );
};
