const handleDelete = (index, notes, setNotes) => {
  const newNotes = notes.filter((_, i) => i !== index);
  setNotes(newNotes);
  localStorage.setItem('notes', JSON.stringify(newNotes));
};

export default handleDelete;
