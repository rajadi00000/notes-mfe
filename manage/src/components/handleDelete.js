// function can also be exposed instead of component

const handleDelete = (index, notes, setNotes) => {
  const newNotes = notes.filter((_, i) => i !== index);
  setNotes(newNotes);
  localStorage.setItem('notes', JSON.stringify(newNotes));

  // Emit custom event for note deletion
  window.dispatchEvent(new CustomEvent('notesUpdated', { detail: newNotes }));
};

export default handleDelete;
