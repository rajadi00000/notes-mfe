import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Mount function to start the app
const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
};

// If we are in development and in isolation,
// call mount immedietly
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_manage_dev_root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount
export { mount };
