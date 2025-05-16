import React from 'react';
import { TextField, Button } from '@mui/material';

export default () => {
  const [note, setNote] = React.useState('');
  const [notes, setNotes] = React.useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  React.useEffect(() => {
    // Listen for custom event to update notes
    const handleNotesUpdated = (event) => {
      const updatedNotes = [...event.detail];
      setNotes(updatedNotes);
    };

    window.addEventListener('notesUpdated', handleNotesUpdated);

    return () => {
      window.removeEventListener('notesUpdated', handleNotesUpdated);
    };
  }, []);

  const handleAdd = () => {
    if (note.trim()) {
      const updatedNotes = [note, ...notes];
      setNotes(updatedNotes);
      setNote('');
      localStorage.setItem('notes', JSON.stringify(updatedNotes));

      // Emit custom event for note addition
      window.dispatchEvent(
        new CustomEvent('notesUpdated', { detail: updatedNotes })
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div>
      <TextField
        label='Add Note'
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onKeyDown={handleKeyPress}
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <Button
        onClick={handleAdd}
        disabled={!note.length}
        variant='contained'
        sx={{
          mt: 2,
          background: 'black',
          borderRadius: 0,
          padding: '0.7rem 1.2rem',
          width: '100%',
        }}
      >
        Add Note
      </Button>
    </div>
  );
};
