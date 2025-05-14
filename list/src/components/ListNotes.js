import React, { Suspense } from 'react';
import { Stack, Card, CardContent, Typography } from '@mui/material';
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
    <Stack mt={6} gap={2} border={'dotted 2px black'}>
      <Typography
        variant='h5'
        mt={4}
        textAlign={'center'}
        textTransform={'uppercase'}
        fontWeight={'bold'}
      >
        Your Notes
      </Typography>
      {notes.length ? (
        notes.map((note, index) => (
          <Stack key={index} mt={2} mb={2}>
            <Card sx={{ backgroundColor: '#ffec87', mr: 4, ml: 4 }}>
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
                <Suspense fallback={<p>A moment please...</p>}>
                  <DeleteNote index={index} notes={notes} setNotes={setNotes} />
                </Suspense>
              </CardContent>
            </Card>
          </Stack>
        ))
      ) : (
        <Typography variant='h6' mt={8} mb={4} textAlign={'center'}>
          Shhh… the notes are sleeping 😴. Add one to wake them up! 😀
        </Typography>
      )}
    </Stack>
  );
};
