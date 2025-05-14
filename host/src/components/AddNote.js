import React from 'react';
const AddNote = React.lazy(() => import('manage/AddNote'));

export default () => {
  return <AddNote />;
};
