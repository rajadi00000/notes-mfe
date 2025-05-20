import React, { useEffect, useRef, useState } from 'react';

export default () => {
  const ref = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadRemote = async () => {
      try {
        const { mount } = await import('list/ListNotes');
        mount(ref.current);
      } catch (err) {
        console.error('Failed to load the List microfrontend:', err);
        setError(true);
      }
    };

    loadRemote();
  }, []);

  if (error) {
    return <div>Search functionality is currently unavailable.</div>;
  }

  return <div ref={ref} />;
};
