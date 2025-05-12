import React from 'react';
import { mount } from 'manage/ManageNotes';

export default () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
