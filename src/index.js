import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Otralapa from './otralapa';
import "./global.css";
import "./otrai.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const roo = ReactDOM.createRoot(document.getElementById('roo'));
roo.render(
  <React.StrictMode>
    <Otralapa />
  </React.StrictMode>
);