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
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}