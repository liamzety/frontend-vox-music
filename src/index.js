import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './assets/style/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
navigator.serviceWorker.register('./sw.js');
