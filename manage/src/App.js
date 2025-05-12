import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(() => {
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

  const handleDelete = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  return (
    <div>
      <TextField
        label="Add Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button onClick={handleAdd} variant="contained" sx={{ mt: 2 }}>
        Add Note
      </Button>
      <ul>
        {notes.map((n, index) => (
          <li key={index}>
            {n}
            <Button onClick={() => handleDelete(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
