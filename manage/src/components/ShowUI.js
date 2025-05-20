import React from 'react';
import AddNote from './AddNote';
import { mount } from 'list/ListNotes';

export default () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div style={{ margin: 'auto', width: '80%' }}>
      <AddNote />
      <div ref={ref} />
    </div>
  );
};
