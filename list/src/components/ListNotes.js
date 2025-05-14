import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
const DeleteNote = React.lazy(() => import('manage/DeleteNote'));

export default () => {
  const [notes, setNotes] = React.useState([]);

  // THIS IS THE CODE FOR USING Remote Function instead of using Delete component
  // Works same (except could not solve issue when delete and then adding a note,
  // the deleted note was getting restored)

  // const handleDelete = async (index) => {
  //   try {
  //     // Dynamically import the remote function
  //     const { default: remoteDeleteFunction } = await import(
  //       'manage/handleDelete'
  //     );

  //     // Now you can use the remoteDeleteFunction
  //     remoteDeleteFunction(index, notes, setNotes);
  //   } catch (error) {
  //     console.error('Error loading remote function:', error);
  //   }
  // };

  React.useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }

    // Listen for custom event to update notes
    const handleNotesUpdated = (event) => {
      setNotes(event.detail);
    };

    window.addEventListener('notesUpdated', handleNotesUpdated);

    return () => {
      window.removeEventListener('notesUpdated', handleNotesUpdated);
    };
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
                {/* <Button
                  onClick={() => handleDelete(index)}
                  variant='contained'
                  color='error'
                  sx={{ mt: 2 }}
                >
                  Delete
                </Button> */}
                <DeleteNote index={index} notes={notes} setNotes={setNotes} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
