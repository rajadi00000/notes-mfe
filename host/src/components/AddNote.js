import React, { Suspense } from 'react';
const AddNote = React.lazy(() => import('manage/AddNote'));

export default () => {
  return (
    <Suspense fallback={<h1>Wait a moment! Loading...</h1>}>
      <AddNote />
    </Suspense>
  );
};
