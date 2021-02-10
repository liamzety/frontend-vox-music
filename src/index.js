import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { RootStoreProvider } from './store/StoreContext';

ReactDOM.render(
  <RootStoreProvider>
    <App />
  </RootStoreProvider>,
  document.getElementById('root')
);
navigator.serviceWorker.register('./sw.js');
