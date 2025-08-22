import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// Add this before your app initialization
const consoleError = console.error;
console.error = (...args) => {
  if (!/ResizeObserver/.test(args[0])) consoleError(...args);
};

// Configure axios to include credentials in requests
axios.defaults.baseURL = process.env.NODE_ENV === 'production' 
  ? 'https://CodeSphere.vercel.app'
  : 'http://localhost:5000';
axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
