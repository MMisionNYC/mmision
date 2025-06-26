if (location.hostname.includes("melissamision.netlify.app")) {
  window.location.href =
    "https://www.melissamision.com" +
    location.pathname +
    location.search +
    location.hash;
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
