import React, { Suspense } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

export default () => {
  const [notes, setNotes] = React.useState([]);

  const handleDelete = async (index) => {
    try {
      // Dynamically import the remote function
      const { default: remoteDeleteFunction } = await import(
        'manage/handleDelete'
      );

      // Now you can use the remoteDeleteFunction
      remoteDeleteFunction(index, notes, setNotes);
    } catch (error) {
      console.error('Error loading remote function:', error);
    }
  };

  React.useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  return (
    <div style={{ marginTop: '1rem' }}>
      <Typography variant='h5' component='div' sx={{ mb: 2 }}>
        Your Notes
      </Typography>
      <Grid container spacing={2}>
        {notes.map((note, index) => (
          <Grid key={index}>
            <Card>
              <CardContent>
                <Typography variant='h6' component='div'>
                  {note}
                </Typography>
                <Button
                  onClick={() => handleDelete(index)}
                  variant='contained'
                  color='error'
                  sx={{ mt: 2 }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
