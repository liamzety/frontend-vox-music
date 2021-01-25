import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { StoreProvider } from './store/StoreContext';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
// navigator.serviceWorker.register('./sw.js');
