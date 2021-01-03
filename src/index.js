import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './assets/style/main.scss';
import { StoreProvider } from './store/index.js';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
navigator.serviceWorker.register('./sw.js');
