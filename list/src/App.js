import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  return (
    <List>
      {notes.map((note, index) => (
        <ListItem key={index}>
          <ListItemText primary={note} />
        </ListItem>
      ))}
    </List>
  );
}
